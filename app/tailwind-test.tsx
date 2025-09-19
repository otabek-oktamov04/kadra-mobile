import { Text, TouchableOpacity, View } from 'react-native';

export default function TailwindTest() {
  return (
    <View className="flex-1 bg-blue-500 justify-center items-center">
      <Text className="text-white text-2xl font-bold mb-4">
        Tailwind CSS is Working! 🎉
      </Text>
      <TouchableOpacity className="bg-purple-600 px-6 py-3 rounded-lg">
        <Text className="text-white font-semibold">
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}
