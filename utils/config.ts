import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Load environment variables
const ENV = {
  // Expo
  EXPO_PROJECT_ID: process.env.EXPO_PROJECT_ID || 'your-expo-project-id',
  
  // Notifications
  EXPO_NOTIFICATION_CHANNEL: process.env.EXPO_NOTIFICATION_CHANNEL || 'default',

  // App Config
  APP_NAME: process.env.APP_NAME || 'MedRemind',
  APP_SCHEME: process.env.APP_SCHEME || 'myapp',
  
  // Authentication
  PRIVY_APP_ID: process.env.PRIVY_APP_ID,
  PRIVY_PUBLIC_KEY: process.env.PRIVY_PUBLIC_KEY,
};

// Allow overriding with Expo Constants manifest
const expoConstants = Constants.expoConfig?.extra || {};
for (const key in expoConstants) {
  if (ENV.hasOwnProperty(key)) {
    // Use type assertion to resolve the index error
    ENV[key as keyof typeof ENV] = expoConstants[key];
  }
}

export default ENV;
