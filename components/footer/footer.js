import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomBottomNav() {
  return (
    <View style={styles.container}>

      <View style={styles.bottomBar}>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="people-outline" size={24} color="white" />
        </TouchableOpacity>

        <View style={{ width: 70 }} />

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="people-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Center Floating Button */}
      <View style={styles.floatingButton}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomBar: {
    height: 60,
    backgroundColor: '#000032',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconButton: {
    padding: 10,
  },
  floatingButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#000032',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
});