import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Simple login validation - accept any email and password
    if (email && password) {
      // Navigate to dashboard
      router.replace('/dashboard');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Background Image */}
      <ImageBackground 
        source={require('../assets/images/login-bg.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        <KeyboardAvoidingView 
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              {/* Login Card */}
              <View style={styles.card}>
                {/* Header Section */}
                <View style={styles.header}>
                  {/* Logo */}
                  <View style={styles.logoContainer}>
                    <SvgXml 
                      xml={`<svg width="119" height="41" viewBox="0 0 119 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="40" height="40" rx="20" fill="#8D75F5"/>
<g filter="url(#filter0_i_765_357)">
<rect x="24.2399" y="24.2726" width="7.14961" height="7.14961" rx="3.57481" fill="white"/>
</g>
<g filter="url(#filter1_i_765_357)">
<rect x="9.17078" y="9.42334" width="6.92963" height="14.2992" rx="3.412" fill="white"/>
</g>
<g filter="url(#filter2_i_765_357)">
<path d="M16.1518 19.3807C11.9499 23.6015 9.72482 21.4955 9.17078 19.9149V28.3299C9.17078 30.1999 11.0141 31.2686 11.5643 31.402C13.4923 31.8695 14.6226 31.0013 15.6199 29.9995L30.4462 14.9728C31.0889 14.2382 32.2014 11.9942 30.4462 10.2311C28.691 8.46794 26.7008 9.14025 25.9252 9.69679C24.4182 11.1661 20.3537 15.1598 16.1518 19.3807Z" fill="white"/>
</g>
<path d="M49.74 23.9L48.86 21.04L55.8 14H59.82L49.74 23.9ZM47.26 28V14H50.66V28H47.26ZM56.24 28L51.04 21.16L53.34 19.18L60.2 28H56.24ZM60.2652 28L65.8052 14H68.6852L74.1852 28H70.7452L68.1052 20.9C67.9985 20.62 67.8918 20.32 67.7852 20C67.6785 19.68 67.5718 19.3533 67.4652 19.02C67.3585 18.6733 67.2518 18.34 67.1452 18.02C67.0518 17.6867 66.9718 17.38 66.9052 17.1L67.5052 17.08C67.4252 17.4133 67.3318 17.74 67.2252 18.06C67.1318 18.38 67.0318 18.7 66.9252 19.02C66.8318 19.3267 66.7252 19.64 66.6052 19.96C66.4852 20.2667 66.3718 20.5867 66.2652 20.92L63.6252 28H60.2652ZM62.9052 25.32L63.9652 22.76H70.4052L71.4452 25.32H62.9052ZM75.9319 28V14H81.7919C82.8185 14 83.7585 14.1733 84.6119 14.52C85.4652 14.8533 86.1985 15.3333 86.8119 15.96C87.4385 16.5867 87.9185 17.3267 88.2519 18.18C88.5852 19.0333 88.7519 19.9733 88.7519 21C88.7519 22.0267 88.5852 22.9733 88.2519 23.84C87.9185 24.6933 87.4385 25.4333 86.8119 26.06C86.1985 26.6733 85.4652 27.1533 84.6119 27.5C83.7585 27.8333 82.8185 28 81.7919 28H75.9319ZM79.3319 25.68L78.8719 25H81.6919C82.2519 25 82.7519 24.9067 83.1919 24.72C83.6319 24.52 84.0052 24.2467 84.3119 23.9C84.6319 23.5533 84.8785 23.1333 85.0519 22.64C85.2252 22.1467 85.3119 21.6 85.3119 21C85.3119 20.4 85.2252 19.8533 85.0519 19.36C84.8785 18.8667 84.6319 18.4467 84.3119 18.1C84.0052 17.7533 83.6319 17.4867 83.1919 17.3C82.7519 17.1 82.2519 17 81.6919 17H78.8119L79.3319 16.36V25.68ZM91.3811 28V14H97.6811C98.5744 14 99.3811 14.1933 100.101 14.58C100.834 14.9667 101.408 15.5 101.821 16.18C102.234 16.8467 102.441 17.6067 102.441 18.46C102.441 19.34 102.234 20.1333 101.821 20.84C101.408 21.5333 100.841 22.08 100.121 22.48C99.4011 22.88 98.5878 23.08 97.6811 23.08H94.6211V28H91.3811ZM99.1411 28L95.5811 21.68L99.0611 21.18L103.021 28H99.1411ZM94.6211 20.48H97.3811C97.7278 20.48 98.0278 20.4067 98.2811 20.26C98.5478 20.1 98.7478 19.88 98.8811 19.6C99.0278 19.32 99.1011 19 99.1011 18.64C99.1011 18.28 99.0211 17.9667 98.8611 17.7C98.7011 17.42 98.4678 17.2067 98.1611 17.06C97.8678 16.9133 97.5078 16.84 97.0811 16.84H94.6211V20.48ZM103.644 28L109.184 14H112.064L117.564 28H114.124L111.484 20.9C111.377 20.62 111.271 20.32 111.164 20C111.057 19.68 110.951 19.3533 110.844 19.02C110.737 18.6733 110.631 18.34 110.524 18.02C110.431 17.6867 110.351 17.38 110.284 17.1L110.884 17.08C110.804 17.4133 110.711 17.74 110.604 18.06C110.511 18.38 110.411 18.7 110.304 19.02C110.211 19.3267 110.104 19.64 109.984 19.96C109.864 20.2667 109.751 20.5867 109.644 20.92L107.004 28H103.644ZM106.284 25.32L107.344 22.76H113.784L114.824 25.32H106.284Z" fill="#111111"/>
<defs>
<filter id="filter0_i_765_357" x="24.2399" y="23.2752" width="7.93704" height="8.14697" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.787384" dy="-1.04985"/>
<feGaussianBlur stdDeviation="0.498677"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.134626 0 0 0 0 0.0425167 0 0 0 0 0.344551 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_765_357"/>
</filter>
<filter id="filter1_i_765_357" x="9.17078" y="8.35416" width="7.23924" height="15.3684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.30967" dy="-2.34697"/>
<feGaussianBlur stdDeviation="0.534588"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_765_357"/>
</filter>
<filter id="filter2_i_765_357" x="8.77708" y="8.09594" width="22.6124" height="23.4362" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.393692" dy="-1.18108"/>
<feGaussianBlur stdDeviation="0.498677"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.134626 0 0 0 0 0.0425167 0 0 0 0 0.344551 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_765_357"/>
</filter>
</defs>
</svg>`}
                      width={119}
                      height={41}
                    />
                  </View>
                  
                  {/* Welcome Text */}
                  <Text style={styles.welcomeText}>Hello! Welcome</Text>
                </View>

                {/* Form Section */}
                <View style={styles.formContainer}>
                  {/* Email Input */}
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Type"
                      placeholderTextColor="#9CA3AF"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="next"
                    />
                  </View>

                  {/* Password Input */}
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Type"
                      placeholderTextColor="#9CA3AF"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="done"
                      onSubmitEditing={handleLogin}
                    />
                  </View>

                  {/* Remember Me & Forgot Password */}
                  <View style={styles.optionsContainer}>
                    <TouchableOpacity 
                      style={styles.rememberContainer}
                      onPress={() => setRememberMe(!rememberMe)}
                    >
                      <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                        {rememberMe && (
                          <Text style={styles.checkmark}>✓</Text>
                        )}
                      </View>
                      <Text style={styles.rememberText}>Remember me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Login Button */}
                  <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  patternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    borderRadius: 1000,
  },
  circle1: {
    top: 64,
    left: 8,
    width: 144,
    height: 144,
    backgroundColor: 'rgba(96, 165, 250, 0.15)', // blue-400/15
  },
  circle2: {
    top: 128,
    right: 16,
    width: 112,
    height: 112,
    backgroundColor: 'rgba(255, 255, 255, 0.08)', // white/8
  },
  circle3: {
    bottom: 128,
    left: 16,
    width: 176,
    height: 176,
    backgroundColor: 'rgba(147, 197, 253, 0.12)', // blue-300/12
  },
  circle4: {
    bottom: 64,
    right: 32,
    width: 96,
    height: 96,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // white/15
  },
  circle5: {
    top: 192,
    left: width * 0.33,
    width: 64,
    height: 64,
    backgroundColor: 'rgba(59, 130, 246, 0.2)', // blue-500/20
  },
  circle6: {
    bottom: 192,
    right: width * 0.33,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // white/10
  },
  line: {
    position: 'absolute',
  },
  line1: {
    top: 112,
    left: width * 0.5,
    width: 1,
    height: 96,
    backgroundColor: 'rgba(96, 165, 250, 0.25)', // blue-400/25
  },
  line2: {
    top: 224,
    right: width * 0.25,
    width: 80,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // white/15
  },
  line3: {
    bottom: 224,
    left: width * 0.33,
    width: 64,
    height: 1,
    backgroundColor: 'rgba(147, 197, 253, 0.2)', // blue-300/20
  },
  line4: {
    top: 288,
    left: width * 0.25,
    width: 48,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // white/20
  },
  line5: {
    bottom: 288,
    right: width * 0.5,
    width: 56,
    height: 1,
    backgroundColor: 'rgba(96, 165, 250, 0.18)', // blue-400/18
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 25,
  },
  header: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoBox: {
    width: 48,
    height: 48,
    backgroundColor: '#7152F3', // Primary color
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    shadowColor: '#7152F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827', // gray-900
    letterSpacing: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827', // gray-900
    marginBottom: 8,
  },
  formContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    color: '#111827', // gray-900
    fontWeight: '500',
    marginBottom: 8,
    fontSize: 14,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB', // gray-200
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: '#111827', // gray-900
    fontSize: 16,
    lineHeight: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#7152F3', // Primary color
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#7152F3', // Primary color
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  rememberText: {
    color: '#111827', // gray-900
    fontWeight: '500',
  },
  forgotText: {
    color: '#7152F3', // Primary color
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#7152F3', // Primary color
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#7152F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#7152F3',
  },
});
