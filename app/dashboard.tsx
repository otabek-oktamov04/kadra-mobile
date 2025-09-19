import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Dimensions, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
const { width, height } = Dimensions.get('window');

export default function DashboardScreen() {
  const [searchText, setSearchText] = useState('');

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

  const handleMenuPress = () => {
    Alert.alert('Menu', 'Menu functionality will be implemented soon!');
  };

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'No new notifications');
  };

  const handleProfilePress = () => {
    Alert.alert('Profile', 'Profile settings will be implemented soon!');
  };

  const handleFilterPress = () => {
    Alert.alert('Filter', 'Filter options will be implemented soon!');
  };

  const handleCardPress = (title: string) => {
    if (title === 'Project Management') {
      router.push('/task-management');
    } else {
      Alert.alert(
        'Feature Selected',
        `${title} feature will be implemented soon!`,
        [{ text: 'OK' }]
      );
    }
  };

  const handleCardOptions = (title: string) => {
    Alert.alert(
      'Options',
      `More options for ${title}`,
      [
        { text: 'View Details', onPress: () => handleCardPress(title) },
        { text: 'Settings', onPress: () => { } },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };




  const metrics = [
    {
      id: 'total-employees',
      title: 'Total Employees',
      value: '14',
      change: '+12%',
      changeType: 'positive',
      comparison: 'Compared to last month',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#8D75F5"/>
<g clip-path="url(#clip0_649_4878)">
<g filter="url(#filter0_d_649_4878)">
<path d="M18.5344 17.1802L18.5336 17.1918C18.4877 17.954 17.9727 18.6052 17.2433 18.8312C15.6502 19.3247 13.8737 19.6 12.0004 19.6C10.1276 19.6 8.35162 19.3244 6.75841 18.8313C6.0288 18.6055 5.51377 17.9539 5.46837 17.1915L5.46652 17.1603C5.44851 16.9065 5.43771 16.6508 5.43771 16.3969C5.43771 15.8226 5.48452 15.25 5.57094 14.6757C5.65377 14.1572 6.02646 13.7016 6.5234 13.5162C7.06174 13.3091 7.61988 13.1219 8.11861 12.832L9.31953 12.1694C9.5878 12.1694 9.81646 12.3549 9.87768 12.6033L11.2077 15.5235C11.252 15.6208 11.3964 15.5969 11.4071 15.4906L11.5755 13.8061C11.3487 13.7232 11.183 13.5162 11.183 13.2677V12.9976C11.183 12.8518 11.2244 12.7492 11.3073 12.6448C11.5341 12.7078 11.7826 12.7492 12.0112 12.7492C12.2381 12.7492 12.4866 12.7078 12.7152 12.6448C12.798 12.7492 12.8395 12.8734 12.8395 12.9976V13.2677C12.8395 13.5162 12.6738 13.7232 12.4451 13.8061L12.6136 15.4906C12.6242 15.5969 12.7687 15.6208 12.813 15.5235L14.143 12.6033C14.206 12.3549 14.4329 12.1694 14.7029 12.1694L15.9039 12.832C16.4008 13.1219 16.9607 13.3091 17.4991 13.5162C17.996 13.7016 18.3471 14.1572 18.4299 14.6955C18.5542 15.5237 18.5956 16.3519 18.5344 17.1802Z" fill="white"/>
</g>
<g filter="url(#filter1_d_649_4878)">
<path d="M9.17715 8.66239C9.26004 8.75166 9.31512 8.86314 9.33546 8.98325C9.63626 10.7594 10.9285 11.7506 12.0108 11.7506C13.0958 11.7506 14.3918 10.7544 14.6884 8.98714C14.707 8.8761 14.7536 8.77033 14.8293 8.68694C14.9278 8.57829 14.9728 8.31361 14.9728 8.02578C14.9728 7.68896 15.0497 7.21344 14.8959 7.07475C14.8382 7.03513 14.7805 7.03513 14.6843 7.05494C14.4343 5.43027 13.6264 4.39999 12.0108 4.39999C10.3951 4.39999 9.58732 5.43027 9.33728 7.05494C9.24111 7.01531 9.16418 7.03513 9.12571 7.07475C8.97184 7.21344 9.04877 7.66914 9.04877 8.02578C9.03429 8.29435 9.07434 8.55168 9.17715 8.66239Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_649_4878" x="3.36985" y="12.1694" width="17.2603" height="11.5663" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4878"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4878" result="shape"/>
</filter>
<filter id="filter1_d_649_4878" x="6.96168" y="4.39999" width="10.0982" height="11.4863" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4878"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4878" result="shape"/>
</filter>
<clipPath id="clip0_649_4878">
<rect width="16" height="16" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>

`,
    },
    {
      id: 'total-vacancies',
      title: 'Total vacancies created',
      value: '7',
      change: '+15%',
      changeType: 'positive',
      comparison: 'Compared to last month',
      icon: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="24" height="24" rx="6" fill="#8D75F5"/>
<g clip-path="url(#clip0_649_4894)">
<g filter="url(#filter0_d_649_4894)">
<path d="M11.1875 5.625H13.8125C14.1231 5.625 14.375 5.87684 14.375 6.1875V7.5H10.625V6.1875C10.625 5.87684 10.8768 5.625 11.1875 5.625ZM9.5 6.1875V7.5H8.1875C6.8413 7.5 5.75 8.5913 5.75 9.9375V11.0625C5.75 11.7874 6.33763 12.375 7.0625 12.375H11V12C11 11.5858 11.3358 11.25 11.75 11.25H13.25C13.6642 11.25 14 11.5858 14 12V12.375H17.9375C18.6624 12.375 19.25 11.7874 19.25 11.0625V9.9375C19.25 8.5913 18.1587 7.5 16.8125 7.5H15.5V6.1875C15.5 5.25552 14.7444 4.5 13.8125 4.5H11.1875C10.2555 4.5 9.5 5.25552 9.5 6.1875ZM19.25 13.1168C18.8712 13.3594 18.4207 13.5 17.9375 13.5H14C14 13.9142 13.6642 14.25 13.25 14.25H11.75C11.3358 14.25 11 13.9142 11 13.5H7.0625C6.57926 13.5 6.12886 13.3594 5.75 13.1168V15.5625C5.75 16.9087 6.8413 18 8.1875 18H16.8125C18.1587 18 19.25 16.9087 19.25 15.5625V13.1168Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_649_4894" x="3.68214" y="4.5" width="17.6357" height="17.6357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4894"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4894" result="shape"/>
</filter>
<clipPath id="clip0_649_4894">
<rect width="18" height="18" fill="white" transform="translate(3.5 3)"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
      id: 'total-leaves',
      title: 'Total leaves applied',
      value: '34',
      change: '-8%',
      changeType: 'negative',
      comparison: 'From last month',
      additionalText: '(this month)',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#8D75F5"/>
<g clip-path="url(#clip0_649_4911)">
<g filter="url(#filter0_d_649_4911)">
<path d="M16.5 15C16.3517 15 16.2067 14.956 16.0833 14.8736C15.96 14.7912 15.8639 14.6741 15.8071 14.537C15.7504 14.4 15.7355 14.2492 15.7645 14.1037C15.7934 13.9582 15.8649 13.8246 15.9698 13.7197L17.6895 12L15.9698 10.2802C15.8991 10.2108 15.8429 10.1281 15.8043 10.0369C15.7658 9.94561 15.7457 9.84763 15.7453 9.74858C15.7448 9.64953 15.764 9.55137 15.8017 9.45978C15.8394 9.36818 15.8949 9.28496 15.9649 9.21492C16.035 9.14488 16.1182 9.0894 16.2098 9.05171C16.3014 9.01401 16.3995 8.99483 16.4986 8.99528C16.5976 8.99573 16.6956 9.01579 16.7869 9.05432C16.8781 9.09285 16.9608 9.14907 17.0303 9.21974L19.2803 11.4697C19.3499 11.5394 19.4052 11.622 19.4429 11.713C19.4806 11.804 19.5 11.9015 19.5 12C19.5 12.0985 19.4806 12.196 19.4429 12.287C19.4052 12.378 19.3499 12.4607 19.2803 12.5303L17.0303 14.7803C16.9607 14.8501 16.8781 14.9054 16.7871 14.9431C16.6961 14.9809 16.5985 15.0002 16.5 15Z" fill="white"/>
</g>
<path d="M14.25 12.75C14.0511 12.75 13.8603 12.671 13.7197 12.5303C13.579 12.3897 13.5 12.1989 13.5 12C13.5 11.8011 13.579 11.6103 13.7197 11.4697C13.8603 11.329 14.0511 11.25 14.25 11.25H18.75C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.5 12.1989 19.421 12.3897 19.2803 12.5303C19.1397 12.671 18.9489 12.75 18.75 12.75H14.25Z" fill="white"/>
<g filter="url(#filter1_d_649_4911)">
<path d="M15.75 8.0625C15.6008 8.06246 15.4578 8.00318 15.3523 7.8977C15.2468 7.79222 15.1875 7.64917 15.1875 7.5V6.75C15.1874 6.7003 15.1676 6.65266 15.1325 6.61752C15.0973 6.58238 15.0497 6.5626 15 6.5625H12C11.8508 6.5625 11.7077 6.50324 11.6023 6.39775C11.4968 6.29226 11.4375 6.14918 11.4375 6C11.4375 5.85082 11.4968 5.70774 11.6023 5.60225C11.7077 5.49676 11.8508 5.4375 12 5.4375H15C15.348 5.43792 15.6816 5.57634 15.9276 5.82239C16.1737 6.06844 16.3121 6.40203 16.3125 6.75V7.5C16.3125 7.64917 16.2532 7.79222 16.1477 7.8977C16.0422 8.00318 15.8992 8.06246 15.75 8.0625Z" fill="white"/>
</g>
<path d="M15 18.5625H12C11.8508 18.5625 11.7077 18.5032 11.6023 18.3977C11.4968 18.2923 11.4375 18.1492 11.4375 18C11.4375 17.8508 11.4968 17.7077 11.6023 17.6023C11.7077 17.4968 11.8508 17.4375 12 17.4375H15C15.0497 17.4374 15.0973 17.4176 15.1325 17.3825C15.1676 17.3473 15.1874 17.2997 15.1875 17.25V16.5C15.1875 16.3508 15.2468 16.2077 15.3523 16.1023C15.4577 15.9968 15.6008 15.9375 15.75 15.9375C15.8992 15.9375 16.0423 15.9968 16.1477 16.1023C16.2532 16.2077 16.3125 16.3508 16.3125 16.5V17.25C16.3121 17.598 16.1737 17.9316 15.9276 18.1776C15.6816 18.4237 15.348 18.5621 15 18.5625Z" fill="white"/>
<g filter="url(#filter2_d_649_4911)">
<path d="M12.0168 4.47583C11.8481 4.35434 11.653 4.2746 11.4475 4.24315C11.2421 4.21171 11.032 4.22945 10.8347 4.29492L5.58547 6.04542C5.32389 6.13219 5.09632 6.29922 4.93511 6.52274C4.7739 6.74627 4.68726 7.01493 4.6875 7.29053V16.7095C4.68711 16.985 4.7736 17.2536 4.93468 17.4772C5.09576 17.7007 5.32322 17.8678 5.58472 17.9546L10.8347 19.7051C11.0321 19.7707 11.2422 19.7884 11.4478 19.7569C11.6533 19.7254 11.8485 19.6456 12.0172 19.5239C12.1859 19.4023 12.3233 19.2424 12.4181 19.0573C12.5129 18.8722 12.5624 18.6672 12.5625 18.4592V5.54078C12.5623 5.33275 12.5128 5.12774 12.4179 4.9426C12.323 4.75746 12.1856 4.59748 12.0168 4.47583ZM10.3125 12.75C10.3125 12.8992 10.2532 13.0423 10.1477 13.1477C10.0423 13.2532 9.89919 13.3125 9.75 13.3125C9.60082 13.3125 9.45774 13.2532 9.35225 13.1477C9.24677 13.0423 9.1875 12.8992 9.1875 12.75V11.25C9.1875 11.1008 9.24677 10.9577 9.35225 10.8523C9.45774 10.7468 9.60082 10.6875 9.75 10.6875C9.89919 10.6875 10.0423 10.7468 10.1477 10.8523C10.2532 10.9577 10.3125 11.1008 10.3125 11.25V12.75Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_649_4911" x="13.6774" y="8.99527" width="7.89041" height="10.1404" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4911"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4911" result="shape"/>
</filter>
<filter id="filter1_d_649_4911" x="9.36964" y="5.4375" width="9.01071" height="6.76071" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4911"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4911" result="shape"/>
</filter>
<filter id="filter2_d_649_4911" x="2.61964" y="4.22803" width="12.0107" height="19.6798" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4911"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4911" result="shape"/>
</filter>
<clipPath id="clip0_649_4911">
<rect width="18" height="18" fill="white" transform="translate(3 3)"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
      id: 'candidates-applied',
      title: 'Candidates applied',
      value: '341',
      change: '+2.5%',
      changeType: 'positive',
      comparison: 'Compared to last month',
      icon: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="24" height="24" rx="6" fill="#8D75F5"/>
<g clip-path="url(#clip0_649_4927)">
<g filter="url(#filter0_d_649_4927)">
<path d="M15.4811 8.5338C16.0427 9.14985 16.3537 9.95356 16.3532 10.7872V10.8209C16.5148 10.9118 16.6893 10.9773 16.8708 11.015C17.3197 11.1181 17.7891 11.086 18.2198 10.9229C18.6505 10.7597 19.0233 10.4727 19.2912 10.0981C19.5591 9.72349 19.7102 9.27796 19.7254 8.81763C19.7406 8.35731 19.6192 7.90279 19.3766 7.5113C19.134 7.11981 18.7809 6.80888 18.3619 6.61766C17.9429 6.42643 17.4767 6.36347 17.022 6.4367C16.5673 6.50993 16.1444 6.71608 15.8066 7.02919C15.4688 7.34229 15.2313 7.74835 15.1238 8.19621C15.251 8.29992 15.3704 8.41275 15.4811 8.5338Z" fill="white"/>
</g>
<g filter="url(#filter1_d_649_4927)">
<path d="M20.4886 11.8365C20.1477 11.4613 19.7368 11.1565 19.2789 10.9391C19.1796 11.0222 19.0753 11.0992 18.9667 11.1697C18.5822 11.4191 18.1441 11.5736 17.6882 11.6205C17.2324 11.6675 16.772 11.6055 16.3448 11.4398C16.256 11.3833 16.2859 11.5491 16.2519 11.6058C16.12 12.1277 15.8643 12.6102 15.5064 13.0124C16.1799 13.329 16.7761 13.7889 17.2534 14.3599H19.3577C20.6345 14.3962 21.3714 12.7654 20.4886 11.8365Z" fill="white"/>
</g>
<g filter="url(#filter2_d_649_4927)">
<path d="M7.3369 10.6971C7.67718 10.9186 8.06974 11.0466 8.47514 11.0683C8.88055 11.09 9.28454 11.0047 9.64654 10.8209C9.6452 10.6714 9.65366 10.522 9.67186 10.3736C9.77791 9.51986 10.2092 8.73992 10.8759 8.1962C10.7525 7.68681 10.4617 7.23359 10.0501 6.90917C9.63842 6.58475 9.12978 6.40792 8.60566 6.40701C6.28088 6.41605 5.40841 9.45435 7.3369 10.6971Z" fill="white"/>
</g>
<g filter="url(#filter3_d_649_4927)">
<path d="M9.14017 13.9436C9.53775 13.5626 9.9948 13.249 10.4933 13.0152C10.094 12.5617 9.82213 12.0103 9.70561 11.4173C9.21214 11.6194 8.67257 11.6816 8.14606 11.5973C7.61955 11.5129 7.12644 11.2852 6.72081 10.9391C6.26295 11.1565 5.85202 11.4614 5.51113 11.8365C4.62942 12.7652 5.36409 14.3964 6.64209 14.3599L8.74913 14.3599C8.86502 14.2082 8.99604 14.0687 9.14017 13.9436Z" fill="white"/>
</g>
<g filter="url(#filter4_d_649_4927)">
<path d="M10.2345 10.4102C9.919 12.4804 12.0918 14.1805 14.0183 13.3865C15.8028 12.722 16.3838 10.2994 15.0647 8.91354C13.5232 7.16346 10.5261 8.08835 10.2345 10.4102Z" fill="white"/>
</g>
<g filter="url(#filter5_d_649_4927)">
<path d="M16.4826 14.3599C16.07 13.9646 15.5873 13.6497 15.0591 13.4316C14.4698 13.8882 13.7454 14.136 12.9999 14.136C12.2543 14.136 11.5299 13.8882 10.9406 13.4315C10.3023 13.6971 9.73068 14.1006 9.26675 14.6131C8.22096 15.7073 9.09284 17.6362 10.6002 17.5923L15.3995 17.5923C17.11 17.603 17.8271 15.3992 16.4826 14.3599Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_649_4927" x="13.056" y="6.40701" width="8.73854" height="8.80292" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4927" result="shape"/>
</filter>
<filter id="filter1_d_649_4927" x="13.4386" y="10.9391" width="9.50429" height="7.55716" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4927" result="shape"/>
</filter>
<filter id="filter2_d_649_4927" x="4.20993" y="6.40701" width="8.73384" height="8.80033" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4927" result="shape"/>
</filter>
<filter id="filter3_d_649_4927" x="3.05714" y="10.9391" width="9.50403" height="7.55716" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4927" result="shape"/>
</filter>
<filter id="filter4_d_649_4927" x="8.13589" y="8.00381" width="9.71582" height="9.71756" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4927" result="shape"/>
</filter>
<filter id="filter5_d_649_4927" x="6.74078" y="13.4315" width="12.51" height="8.29718" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.06786"/>
<feGaussianBlur stdDeviation="1.03393"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4927"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4927" result="shape"/>
</filter>
<clipPath id="clip0_649_4927">
<rect width="18" height="18" fill="white" transform="translate(4 3)"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
      id: 'on-time-checkins',
      title: 'On time check-in\'s',
      value: '44',
      change: '+9%',
      changeType: 'positive',
      comparison: 'Compared to last month',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#8D75F5"/>
<g clip-path="url(#clip0_649_4944)">
<g filter="url(#filter0_d_649_4944)">
<path d="M12.994 7.98743C10.7815 7.98743 8.98145 9.78746 8.98145 12C8.98145 14.2125 10.7815 16.0126 12.994 16.0126C15.2066 16.0126 17.0066 14.2125 17.0066 12C17.0066 9.78746 15.2066 7.98743 12.994 7.98743ZM14.8862 12.4687H12.5253V9.1784H13.4628V11.5312H14.8862V12.4687Z" fill="white"/>
<path d="M13.0117 5.4938C11.5842 5.48995 10.2637 5.94614 9.18922 6.72199H5.64138C5.08203 6.72199 4.62863 7.17542 4.62863 7.73474C4.62863 8.29408 5.08206 8.74749 5.64138 8.74749H7.35778C7.03075 9.31299 6.78666 9.93233 6.64144 10.5889H4.51275C3.95344 10.5889 3.5 11.0423 3.5 11.6016C3.5 12.161 3.95344 12.6144 4.51275 12.6144H6.51662C6.57712 13.2603 6.73206 13.8787 6.9675 14.4558H6.24412C5.68478 14.4558 5.23137 14.9092 5.23137 15.4685C5.23137 16.0279 5.68481 16.4813 6.24412 16.4813H8.27706C9.46244 17.7285 11.1372 18.5062 12.9938 18.5062C16.5871 18.5062 19.5 15.5933 19.5 12C19.5 8.40524 16.6064 5.50349 13.0117 5.4938ZM12.9938 16.95C10.2643 16.95 8.04372 14.7295 8.04372 12C8.04372 9.27052 10.2643 7.04992 12.9938 7.04992C15.7232 7.04992 17.9438 9.27052 17.9438 12C17.9438 14.7295 15.7232 16.95 12.9938 16.95Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_649_4944" x="1.5" y="5.49377" width="20" height="17.0124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4944"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4944" result="shape"/>
</filter>
<clipPath id="clip0_649_4944">
<rect width="16" height="16" fill="white" transform="translate(3.5 4)"/>
</clipPath>
</defs>
</svg>
`,
    },
    {
      id: 'late-checkins',
      title: 'Late check-in\'s',
      value: '21',
      change: '-2%',
      changeType: 'negative',
      comparison: 'Compared to last month',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="6" fill="#8D75F5"/>
<g clip-path="url(#clip0_649_4944)">
<g filter="url(#filter0_d_649_4944)">
<path d="M12.994 7.98743C10.7815 7.98743 8.98145 9.78746 8.98145 12C8.98145 14.2125 10.7815 16.0126 12.994 16.0126C15.2066 16.0126 17.0066 14.2125 17.0066 12C17.0066 9.78746 15.2066 7.98743 12.994 7.98743ZM14.8862 12.4687H12.5253V9.1784H13.4628V11.5312H14.8862V12.4687Z" fill="white"/>
<path d="M13.0117 5.4938C11.5842 5.48995 10.2637 5.94614 9.18922 6.72199H5.64138C5.08203 6.72199 4.62863 7.17542 4.62863 7.73474C4.62863 8.29408 5.08206 8.74749 5.64138 8.74749H7.35778C7.03075 9.31299 6.78666 9.93233 6.64144 10.5889H4.51275C3.95344 10.5889 3.5 11.0423 3.5 11.6016C3.5 12.161 3.95344 12.6144 4.51275 12.6144H6.51662C6.57712 13.2603 6.73206 13.8787 6.9675 14.4558H6.24412C5.68478 14.4558 5.23137 14.9092 5.23137 15.4685C5.23137 16.0279 5.68481 16.4813 6.24412 16.4813H8.27706C9.46244 17.7285 11.1372 18.5062 12.9938 18.5062C16.5871 18.5062 19.5 15.5933 19.5 12C19.5 8.40524 16.6064 5.50349 13.0117 5.4938ZM12.9938 16.95C10.2643 16.95 8.04372 14.7295 8.04372 12C8.04372 9.27052 10.2643 7.04992 12.9938 7.04992C15.7232 7.04992 17.9438 9.27052 17.9438 12C17.9438 14.7295 15.7232 16.95 12.9938 16.95Z" fill="white"/>
</g>
</g>
<defs>
<filter id="filter0_d_649_4944" x="1.5" y="5.49377" width="20" height="17.0124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.186275 0 0 0 0 0.0176471 0 0 0 0 0.382353 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_649_4944"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_649_4944" result="shape"/>
</filter>
<clipPath id="clip0_649_4944">
<rect width="16" height="16" fill="white" transform="translate(3.5 4)"/>
</clipPath>
</defs>
</svg>
`,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
            <SvgXml
              xml={`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#7152F3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2917 13.8333C25.2917 14.1785 25.0118 14.4583 24.6667 14.4583L11.3333 14.4583C10.9882 14.4583 10.7083 14.1785 10.7083 13.8333C10.7083 13.4882 10.9882 13.2083 11.3333 13.2083L24.6667 13.2083C25.0118 13.2083 25.2917 13.4882 25.2917 13.8333Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2917 18C25.2917 18.3452 25.0118 18.625 24.6667 18.625L11.3333 18.625C10.9882 18.625 10.7083 18.3452 10.7083 18C10.7083 17.6548 10.9882 17.375 11.3333 17.375L24.6667 17.375C25.0118 17.375 25.2917 17.6548 25.2917 18Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2917 22.1667C25.2917 22.5118 25.0118 22.7917 24.6667 22.7917L11.3333 22.7917C10.9882 22.7917 10.7083 22.5118 10.7083 22.1667C10.7083 21.8215 10.9882 21.5417 11.3333 21.5417L24.6667 21.5417C25.0118 21.5417 25.2917 21.8215 25.2917 22.1667Z" fill="white"/>
</svg>`}
              width={36}
              height={36}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Dashboard</Text>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.notificationButton} onPress={handleNotificationPress}>
              <SvgXml
                xml={`<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="#7152F3" fill-opacity="0.08"/>
<rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#7152F3"/>
<path d="M13.7864 15.8627C14.0359 13.6606 15.8473 12 18 12C20.1527 12 21.9641 13.6606 22.2136 15.8627L22.4435 17.8923C22.5006 18.3967 22.705 18.8712 23.0297 19.2534C23.7186 20.0643 23.1594 21.3333 22.1132 21.3333H13.8867C12.8405 21.3333 12.2814 20.0643 12.9703 19.2534C13.295 18.8712 13.4994 18.3967 13.5565 17.8923L13.7864 15.8627Z" stroke="#7152F3" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M20 22.6667C19.7089 23.4435 18.9234 24 18 24C17.0766 24 16.2911 23.4435 16 22.6667" stroke="#7152F3" stroke-width="1.5" stroke-linecap="round"/>
</svg>`}
                width={36}
                height={36}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
              <View style={styles.profileImage}>
                <Text style={styles.profileText}>👤</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#9CA3AF"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
            <SvgXml
              xml={`<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="44" height="44" rx="10" fill="#F9F9F9"/>
<path d="M13 16H20" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 22H22" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29 22H31" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 16L31 16" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 28H30" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 28H16" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="18" cy="28" r="2" stroke="#333333" stroke-width="1.5"/>
<circle cx="27" cy="22" r="2" stroke="#333333" stroke-width="1.5"/>
<circle cx="22" cy="16" r="2" stroke="#333333" stroke-width="1.5"/>
</svg>`}
              width={44}
              height={44}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Metrics Cards */}
        <View style={styles.metricsContainer}>
          {metrics.map((metric, index) => (
            <TouchableOpacity
              key={metric.id}
              style={styles.metricCard}
              onPress={() => handleCardPress(metric.title)}
            >
              <View style={styles.metricCardHeader}>

                <SvgXml
                  xml={metric.icon}
                  width={24}
                  height={24}
                />

                <TouchableOpacity
                  style={styles.metricOptions}
                  onPress={() => handleCardOptions(metric.title)}
                >
                  <Text style={styles.optionsIcon}>⋯</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.metricTitle}>{metric.title}</Text>

              <View style={styles.metricValueContainer}>
                <Text style={styles.metricValue}>{metric.value}</Text>
                {metric.additionalText && (
                  <Text style={styles.metricAdditionalText}>{metric.additionalText}</Text>
                )}
                <Text style={[
                  styles.metricChange,
                  metric.changeType === 'positive' ? styles.positiveChange : styles.negativeChange
                ]}>
                  {metric.changeType === 'positive' ? '↗' : '↘'} {metric.change}
                </Text>
              </View>

              <Text style={styles.metricComparison}>{metric.comparison}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    padding: 0,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Lexend-Bold',
    fontWeight: '600',
    color: '#111827',
    marginLeft: 16,
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationButton: {
    padding: 0,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lexend-Bold',
    color: '#111827',
  },
  filterButton: {
    padding: 0,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 32,
  },
  metricsContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricCard: {
    width: (width - 60) / 2,
    backgroundColor: '#F9F9F9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  metricCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  metricIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metricIcon: {
    // SVG icons don't need font styling
  },
  metricOptions: {
    padding: 4,
  },
  optionsIcon: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  metricTitle: {
    fontSize: 14,
    fontFamily: 'Lexend-Bold',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 20,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontFamily: 'Lexend-Bold',
    color: '#111827',
  },
  metricAdditionalText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginLeft: 4,
  },
  metricChange: {
    fontSize: 12,
    fontFamily: 'Lexend-Bold',
    marginLeft: 8,
  },
  positiveChange: {
    color: '#10B981',
  },
  negativeChange: {
    color: '#EF4444',
  },
  metricComparison: {
    fontSize: 10,
    fontFamily: 'Lexend-Bold',
    color: '#9CA3AF',
    marginTop: 6,
  },
});
