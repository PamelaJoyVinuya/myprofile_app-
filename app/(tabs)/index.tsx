import { Button, Image, StyleSheet, Switch, View, Text } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function for dark/light mode
  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
  };

  // Determine background and text colors based on dark mode state
  const backgroundColor = isDarkMode ? '#000' : '#FFF'; // Black for dark mode, white for light mode
  const textColor = isDarkMode ? '#FFF' : '#000'; // White for dark mode, black for light mode

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/Me.jpeg')}
          style={styles.profileImage}
        />
        {/* Joined Info */}
        <View style={styles.joinedContainer}>
          <Text style={[{ color: textColor, fontSize: 35 }]}>Joined</Text>
          <Text style={[{ color: textColor, fontSize: 25, fontWeight: 'bold' }]}>1 Year Ago</Text>
        </View>
      </View>

      {/* Profile Name */}
      <View>
        <Text style={[{ color: textColor,  fontSize: 45, paddingLeft: 25, fontWeight: 'bold' }]}>Pamela Joy</Text>
        <Text style={[{ color: textColor, fontSize: 45, paddingLeft: 25, paddingBottom: 35 }]}>Vinuya</Text>
      </View>

      <View>
        <Text style={[styles.subtitleText, { color: textColor }]}><Ionicons name="person" size={24} color={textColor}/> Profile</Text>
      </View>

      <View>
        <Text style={[styles.subtitleText, { color: textColor }]}>
        <Ionicons name="settings" size={24} color={textColor}/> Settings</Text>
      </View>
   
      <View>
        <Text style={[styles.subtitleText, { color: textColor }]}>
        <Ionicons name="notifications" size={24} color={textColor} /> Notifications</Text>
      </View>
      {/* Dark Mode Toggle */}
      <View style={styles.rowContainer}>
  <Text style={{ color: textColor, fontSize: 25, paddingLeft: 15, }}> {/* Adjust the fontSize as needed */}
    <Ionicons name="moon" size={24} color={textColor} /> Dark Mode
  </Text>
  <Switch
    value={isDarkMode}
    onValueChange={toggleSwitch}
    style={{ marginLeft: 10 }} // Optional spacing between text and switch
  />
</View>

      

      {/* Sign Out Button */}
      <View style={styles.stepContainer}>
        <TouchableOpacity style={[styles.signOutButton]}>
          <Text style={[styles.signOutText, { color: textColor }]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingLeft: 20,
    top: 15
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
  },
  stepContainer: {
    marginBottom: 10,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  joinedContainer: {
    paddingLeft: 20,
  },
  subtitleText: {
    fontSize: 25,
    color: 'gray',
    paddingLeft: 20,
    paddingBottom: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
    bottom: 20,
    top: 10,
    paddingBottom: 10
  },
  signOutButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginLeft: 15
  },
  signOutText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray'
  },
  rowContainer: {
    flexDirection: 'row',  // Aligns children horizontally
    alignItems: 'center',  // Vertically centers both Text and Switch
    paddingBottom: 25// Optional padding for spacing
   
  },
});
