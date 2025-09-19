import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoginTailwindExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      router.replace('/dashboard');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Background with Gradient */}
      <View className="flex-1 bg-blue-900">
        {/* Geometric Pattern Overlay */}
        <View className="absolute inset-0">
          {/* Large circles */}
          <View className="absolute top-16 left-2 w-36 h-36 bg-blue-400/15 rounded-full" />
          <View className="absolute top-32 right-4 w-28 h-28 bg-white/8 rounded-full" />
          <View className="absolute bottom-32 left-4 w-44 h-44 bg-blue-300/12 rounded-full" />
          <View className="absolute bottom-16 right-8 w-24 h-24 bg-white/15 rounded-full" />
        </View>

        <KeyboardAvoidingView 
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <ScrollView 
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className="flex-1 justify-center px-6 py-12">
              {/* Login Card */}
              <View className="bg-white rounded-3xl mx-2 shadow-2xl">
                {/* Header Section */}
                <View className="items-center pt-8 pb-6 px-6">
                  {/* Logo */}
                  <View className="flex-row items-center mb-6">
                    <View className="w-12 h-12 bg-purple-600 rounded-xl items-center justify-center mr-3 shadow-lg">
                      <Text className="text-white text-xl font-bold">K</Text>
                    </View>
                    <Text className="text-2xl font-bold text-gray-900 tracking-wide">KADRA</Text>
                  </View>
                  
                  {/* Welcome Text */}
                  <Text className="text-2xl font-bold text-gray-900 mb-2">Hello! Welcome</Text>
                </View>

                {/* Form Section */}
                <View className="px-6 pb-8">
                  {/* Email Input */}
                  <View className="mb-6">
                    <Text className="text-gray-900 font-medium mb-2 text-sm">Email</Text>
                    <TextInput
                      className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-base"
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
                  <View className="mb-6">
                    <Text className="text-gray-900 font-medium mb-2 text-sm">Password</Text>
                    <TextInput
                      className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-base"
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
                  <View className="flex-row items-center justify-between mb-8">
                    <TouchableOpacity 
                      className="flex-row items-center"
                      onPress={() => setRememberMe(!rememberMe)}
                    >
                      <View className={`w-5 h-5 border-2 rounded border-purple-600 mr-2 items-center justify-center ${rememberMe ? 'bg-purple-600' : ''}`}>
                        {rememberMe && (
                          <Text className="text-white text-xs font-bold">✓</Text>
                        )}
                      </View>
                      <Text className="text-gray-900 font-medium">Remember me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text className="text-purple-600 font-medium">Forgot password?</Text>
                    </TouchableOpacity>
                  </View>

                  {/* Login Button */}
                  <TouchableOpacity 
                    className="bg-purple-600 rounded-xl py-4 items-center shadow-lg"
                    onPress={handleLogin}
                  >
                    <Text className="text-white text-lg font-semibold">Log In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
