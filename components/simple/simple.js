import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TopBarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* Logo */}
        <Image
          source={require('./assets/logo_BLANC.png')}
          style={styles.logo}
        />

        {/* Icons */}
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="shopping-cart" size={22} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Icon name="home" size={22} color="#fff" />
          </TouchableOpacity>

          {/* Message Icon with Notification Dot */}
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="message-square" size={22} color="#fff" />
            <View style={styles.notificationDot}>
              <Text style={styles.dotText}>1</Text>
            </View>
          </TouchableOpacity>

          {/* Profile Icon */}
          <TouchableOpacity style={styles.profileButton}>
            <Icon name="user" size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body (Empty for now) */}
      <View style={styles.body}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    topBar: {
      height: 60,
      backgroundColor: '#020C40',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    logo: {
      width: 120,
      height: 40,
      resizeMode: 'contain',
    },
    iconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      marginHorizontal: 8,
      position: 'relative',
    },
    notificationDot: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: 'red',
      borderRadius: 10,
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dotText: {
      color: '#fff',
      fontSize: 10,
      fontWeight: 'bold',
    },
    profileButton: {
      marginLeft: 8,
      backgroundColor: 'white',
      padding: 6,
      borderRadius: 50,
      backgroundColor: '#B30000',
    },
    body: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });