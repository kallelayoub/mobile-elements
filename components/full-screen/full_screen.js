import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function HeaderWithMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View>
      <View style={styles.header}>
      <Image source={require('./assets/logo_BLANC.png')}style={styles.logo}/>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="person-circle" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Modal visible={isMenuOpen} animationType="fade" transparent={true}>
        <View style={styles.menuOverlay}>
          <View style={styles.menuContainer}>
            {['Accueil', 'A propos', 'Actualités', 'Contact'].map((item, index) => (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Text style={styles.menuText}>{item}</Text>
                <View style={styles.underline} />
              </TouchableOpacity>
            ))}

            <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
              <Ionicons name="close" size={36} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#000032',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: '#000032',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    width: '100%',
    alignItems: 'center',
  },
  menuItem: {
    marginVertical: 15,
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  underline: {
    marginTop: 5,
    height: 2,
    width: 80,
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});