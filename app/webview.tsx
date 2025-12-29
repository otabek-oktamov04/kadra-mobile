import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";

const { width, height } = Dimensions.get("window");

export default function WebViewScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cameraPermission, setCameraPermission] = useState<string | null>(null);
  const [microphonePermission, setMicrophonePermission] = useState<
    string | null
  >(null);
  const [locationPermission, setLocationPermission] = useState<string | null>(
    null
  );

  // Request permissions on component mount
  useEffect(() => {
    requestPermissions();
  }, []);

  // Safety timeout: if load takes too long, show error state
  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 20000);
    return () => clearTimeout(timeout);
  }, [loading]);

  const requestPermissions = async () => {
    try {
      // Request camera permission
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status);

      // Request microphone permission
      const microphoneStatus = await Camera.requestMicrophonePermissionsAsync();
      setMicrophonePermission(microphoneStatus.status);

      // Request foreground location permission
      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      setLocationPermission(locationStatus);

      if (cameraStatus.status !== "granted") {
        Alert.alert(
          "Camera Permission Required",
          "This app needs camera access to use camera features in the web content. You can grant permission in your device settings.",
          [{ text: "OK" }]
        );
      }
      if (locationStatus !== "granted") {
        Alert.alert(
          "Location Permission Recommended",
          "This app may use your location for features in the web content. You can enable it in your device settings.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      console.error("Error requesting permissions:", error);
    }
  };

  const handleRefresh = () => {
    setError(false);
    setLoading(true);
  };

  const handleLoadStart = () => {
    setLoading(true);
    setError(false);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  // Handle permission requests from WebView (Android)
  const handlePermissionRequest = async (request: any) => {
    if (Platform.OS === "android") {
      const { resources } = request;

      // Check if the request includes camera, microphone, or geolocation
      if (
        resources.includes("android.webkit.resource.VIDEO_CAPTURE") ||
        resources.includes("android.webkit.resource.AUDIO_CAPTURE") ||
        resources.includes("android.webkit.resource.GEOLOCATION")
      ) {
        // Check if we have the necessary permissions
        const cameraStatus = await Camera.getCameraPermissionsAsync();
        const microphoneStatus = await Camera.getMicrophonePermissionsAsync();
        const { status: foregroundLocationStatus } =
          await Location.getForegroundPermissionsAsync();

        // If we don't have permissions, request them
        if (
          cameraStatus.status !== "granted" ||
          microphoneStatus.status !== "granted" ||
          foregroundLocationStatus !== "granted"
        ) {
          const newCameraStatus = await Camera.requestCameraPermissionsAsync();
          const newMicrophoneStatus =
            await Camera.requestMicrophonePermissionsAsync();
          const { status: newLocationStatus } =
            await Location.requestForegroundPermissionsAsync();

          if (
            newCameraStatus.status === "granted" &&
            newMicrophoneStatus.status === "granted" &&
            newLocationStatus === "granted"
          ) {
            request.grant(resources);
          } else {
            request.deny();
            Alert.alert(
              "Permission Denied",
              "Camera, microphone, and location access may be required for this feature. Please enable them in your device settings.",
              [{ text: "OK" }]
            );
          }
        } else {
          // We have permissions, grant the request
          request.grant(resources);
        }
      } else {
        // For other resources, grant by default
        request.grant(resources);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading KADRA App...</Text>
        </View>
      )}

      {/* Error State */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>⚠️ Failed to Load</Text>
          <Text style={styles.errorMessage}>
            Unable to connect to KADRA App. Please check your internet
            connection and try again.
          </Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRefresh}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* WebView */}
      <WebView
        source={{ uri: "https://dev.kadra.uz/" }}
        style={styles.webview}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onLoadProgress={({ nativeEvent }) => {
          if (nativeEvent?.progress >= 0.9) {
            setLoading(false);
          }
        }}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false} // Allow media playback without user interaction
        {...(Platform.OS === "ios" ? { allowsInlineMediaPlayback: true } : {})}
        geolocationEnabled={true}
        onError={handleError}
        onHttpError={() => {
          setError(true);
          setLoading(false);
        }}
        onRenderProcessGone={() => {
          // Android specific: recover from renderer crash
          setError(true);
          setLoading(false);
        }}
        domStorageEnabled={true}
        startInLoadingState={false}
        scalesPageToFit={false}
        mixedContentMode="compatibility"
        {...(Platform.OS === "ios" ? { bounces: false } : {})}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...(Platform.OS === "ios"
          ? {
              pinchGestureEnabled: false,
              allowsBackForwardNavigationGestures: false,
              decelerationRate: "normal" as const,
              automaticallyAdjustContentInsets: false,
              contentInsetAdjustmentBehavior: "never" as const,
            }
          : {})}
        onShouldStartLoadWithRequest={() => true}
        onMessage={() => {}}
        onPermissionRequest={handlePermissionRequest}
        injectedJavaScript={`
          // Expose simple availability flag to web content
          window.__expoHasLocationPermission = ${
            locationPermission === "granted" ? "true" : "false"
          };
          // Remove existing viewport meta tags
          const existingViewport = document.querySelector('meta[name="viewport"]');
          if (existingViewport) {
            existingViewport.remove();
          }
          
          // Add new viewport meta tag
          const meta = document.createElement('meta');
          meta.setAttribute('name', 'viewport');
          meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, shrink-to-fit=no');
          document.getElementsByTagName('head')[0].appendChild(meta);
          
          // Disable zoom at CSS level
          const style = document.createElement('style');
          style.innerHTML = \`
            * {
              -webkit-user-select: none;
              -webkit-touch-callout: none;
              -webkit-tap-highlight-color: transparent;
            }
            body {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              text-size-adjust: 100%;
              touch-action: pan-x pan-y;
            }
          \`;
          document.getElementsByTagName('head')[0].appendChild(style);
          
          // Prevent all zoom gestures
          let lastTouchEnd = 0;
          
          document.addEventListener('touchstart', function(e) {
            if (e.touches.length > 1) {
              e.preventDefault();
            }
          }, { passive: false });
          
          document.addEventListener('touchend', function(e) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
              e.preventDefault();
            }
            lastTouchEnd = now;
          }, { passive: false });
          
          document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) {
              e.preventDefault();
            }
          }, { passive: false });
          
          document.addEventListener('gesturestart', function(e) {
            e.preventDefault();
          }, { passive: false });
          
          document.addEventListener('gesturechange', function(e) {
            e.preventDefault();
          }, { passive: false });
          
          document.addEventListener('gestureend', function(e) {
            e.preventDefault();
          }, { passive: false });
          
          // Prevent double tap zoom
          document.addEventListener('dblclick', function(e) {
            e.preventDefault();
          }, { passive: false });
          
          true;
        `}
        userAgent="Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  loadingText: {
    fontSize: 16,
    fontFamily: "Lexend-Bold",
    color: "#6B7280",
  },
  errorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    zIndex: 1000,
  },
  errorTitle: {
    fontSize: 20,
    fontFamily: "Lexend-Bold",
    fontWeight: "600",
    color: "#111827",
    marginTop: 16,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    fontFamily: "Lexend-Bold",
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  retryButton: {
    backgroundColor: "#8D75F5",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    fontSize: 16,
    fontFamily: "Lexend-Bold",
    fontWeight: "600",
    color: "#FFFFFF",
  },
  webview: {
    flex: 1,
    marginTop: 50,
  },
});
