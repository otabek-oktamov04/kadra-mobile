import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
  currentPage?: string;
}

export default function Sidebar({ isVisible, onClose, currentPage = 'dashboard' }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    project: false,
  });
  
  const slideAnim = useState(new Animated.Value(-width * 0.8))[0];
  const overlayAnim = useState(new Animated.Value(0))[0];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  // Animation effects
  React.useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -width * 0.8,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(overlayAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible]);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => router.replace('/login') }
      ]
    );
  };

  const handleNavigation = (page: string) => {
    onClose();
    if (page === 'dashboard') {
      router.push('/dashboard');
    } else if (page === 'projects') {
      router.push('/task-management');
    } else if (page === 'profile') {
      Alert.alert('Profile', 'Profile settings will be implemented soon!');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <Animated.View style={[styles.overlay, { opacity: overlayAnim }]}>
        <TouchableOpacity 
          style={styles.overlayTouchable} 
          activeOpacity={1} 
          onPress={onClose}
        />
      </Animated.View>
      
      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
        {/* Header */}
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
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {/* Dashboard */}
          <TouchableOpacity 
            style={[
              styles.menuItem,
              currentPage === 'dashboard' && styles.activeMenuItem
            ]}
            onPress={() => handleNavigation('dashboard')}
          >
            <View style={styles.menuItemContent}>
              <SvgXml
                xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="${currentPage === 'dashboard' ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="${currentPage === 'dashboard' ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
                width={24}
                height={24}
              />
              <Text style={[
                styles.menuText,
                currentPage === 'dashboard' && styles.activeMenuText
              ]}>
                Dashboard
              </Text>
            </View>
            {currentPage === 'dashboard' && <View style={styles.activeIndicator} />}
          </TouchableOpacity>


          {/* Project Section */}
          <View style={styles.sectionContainer}>
            <TouchableOpacity 
              style={[
                styles.menuItem,
                styles.expandableItem,
                expandedSections.project && styles.activeMenuItem
              ]}
              onPress={() => toggleSection('project')}
            >
              <View style={styles.menuItemContent}>
                <SvgXml
                  xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="${expandedSections.project ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2V8H20" stroke="${expandedSections.project ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 13H8" stroke="${expandedSections.project ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17H8" stroke="${expandedSections.project ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 9H9H8" stroke="${expandedSections.project ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
                  width={24}
                  height={24}
                />
                <Text style={[
                  styles.menuText,
                  expandedSections.project && styles.activeMenuText
                ]}>
                  Project
                </Text>
                <SvgXml
                  xml={`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 15L12 9L6 15" stroke="${expandedSections.project ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
                  width={16}
                  height={16}
                  style={styles.expandIcon}
                />
              </View>
              {expandedSections.project && <View style={styles.activeIndicator} />}
            </TouchableOpacity>

            {expandedSections.project && (
              <View style={styles.subMenuContainer}>
                <TouchableOpacity style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Tasks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Timesheet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuItem}>
                  <Text style={styles.subMenuText}>Timesheet report</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Profile */}
          <TouchableOpacity 
            style={[
              styles.menuItem,
              currentPage === 'profile' && styles.activeMenuItem
            ]}
            onPress={() => handleNavigation('profile')}
          >
            <View style={styles.menuItemContent}>
              <SvgXml
                xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="${currentPage === 'profile' ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="7" r="4" stroke="${currentPage === 'profile' ? '#8D75F5' : '#6B7280'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
                width={24}
                height={24}
              />
              <Text style={[
                styles.menuText,
                currentPage === 'profile' && styles.activeMenuText
              ]}>
                Profile
              </Text>
            </View>
            {currentPage === 'profile' && <View style={styles.activeIndicator} />}
          </TouchableOpacity>


          {/* Logout */}
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={handleLogout}
          >
            <View style={styles.menuItemContent}>
              <SvgXml
                xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17L21 12L16 7" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12H9" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
                width={24}
                height={24}
              />
              <Text style={styles.logoutText}>
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  overlayTouchable: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.8,
    height: height,
    backgroundColor: '#FFFFFF',
    zIndex: 10000,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  menuContainer: {
    paddingTop: 20,
  },
  menuItem: {
    position: 'relative',
    marginHorizontal: 20,
    marginVertical: 4,
    borderRadius: 12,
  },
  activeMenuItem: {
    backgroundColor: '#F3F4FF',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    fontWeight: '600',
    color: '#6B7280',
    marginLeft: 16,
  },
  activeMenuText: {
    color: '#8D75F5',
    fontWeight: '900',
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    fontWeight: '800',
    color: '#EF4444',
    marginLeft: 16,
  },
  activeIndicator: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#8D75F5',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  sectionContainer: {
    marginBottom: 4,
  },
  expandableItem: {
    // Additional styles for expandable items
  },
  expandIcon: {
    marginLeft: 'auto',
  },
  subMenuContainer: {
    marginLeft: 20,
    marginTop: 4,
    marginBottom: 8,
  },
  subMenuItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 2,
  },
  subMenuText: {
    fontSize: 14,
    fontFamily: 'Lexend-Bold',
    fontWeight: '700',
    color: '#6B7280',
  },
});
