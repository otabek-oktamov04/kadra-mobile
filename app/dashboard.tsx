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
        { text: 'Settings', onPress: () => {} },
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
      icon: '👤',
    },
    {
      id: 'total-vacancies',
      title: 'Total vacancies created',
      value: '7',
      change: '+15%',
      changeType: 'positive',
      comparison: 'Compared to last month',
      icon: '💼',
    },
    {
      id: 'total-leaves',
      title: 'Total leaves applied',
      value: '34',
      change: '-8%',
      changeType: 'negative',
      comparison: 'From last month',
      additionalText: '(this month)',
      icon: '🚪',
    },
    {
      id: 'candidates-applied',
      title: 'Candidates applied',
      value: '341',
      change: '+2.5%',
      changeType: 'positive',
      comparison: 'Compared to last month',
      icon: '👥',
    },
    {
      id: 'on-time-checkins',
      title: 'On time check-in\'s',
      value: '44',
      change: '+9%',
      changeType: 'positive',
      comparison: 'Compared to last month',
      icon: '⏰',
    },
    {
      id: 'late-checkins',
      title: 'Late check-in\'s',
      value: '21',
      change: '-2%',
      changeType: 'negative',
      comparison: 'Compared to last month',
      icon: '⏰',
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
                <View style={styles.metricIconContainer}>
                  <Text style={styles.metricIcon}>{metric.icon}</Text>
                </View>
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
              </View>
              
              <View style={styles.metricChangeContainer}>
                <Text style={[
                  styles.metricChange,
                  metric.changeType === 'positive' ? styles.positiveChange : styles.negativeChange
                ]}>
                  {metric.changeType === 'positive' ? '↗' : '↘'} {metric.change}
                </Text>
                <Text style={styles.metricComparison}>{metric.comparison}</Text>
              </View>
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
    fontWeight: 'bold',
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
    fontSize: 20,
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
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 8,
    lineHeight: 20,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  metricAdditionalText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginLeft: 4,
  },
  metricChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metricChange: {
    fontSize: 12,
    fontWeight: '600',
  },
  positiveChange: {
    color: '#10B981',
  },
  negativeChange: {
    color: '#EF4444',
  },
  metricComparison: {
    fontSize: 10,
    color: '#9CA3AF',
    flex: 1,
    textAlign: 'right',
  },
});
