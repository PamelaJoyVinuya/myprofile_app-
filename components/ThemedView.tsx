import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  isDarkMode?: boolean;
};

export function ThemedView({ style, lightColor, darkColor, isDarkMode, ...otherProps }: ThemedViewProps) {
  const backgroundColor = isDarkMode ? darkColor || '#000' : lightColor || '#FFF'; // Fallback colors

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
