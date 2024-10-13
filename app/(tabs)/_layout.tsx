import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  
  const colorScheme = useColorScheme();

  const tabBarBackgroundColor = Colors[colorScheme ?? 'dark'].background;
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].background,
        tabBarStyle: { backgroundColor: tabBarBackgroundColor },
        headerShown: false,
      }}>
         <Tabs.Screen
        name="index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}  
      />  
    </Tabs>
    
  );
}

