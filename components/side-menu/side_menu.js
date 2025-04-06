import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function HeaderDropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo_BLANC.png')} 
          style={styles.logo}
        />

        <Image
          source={require('./assets/logo_BLANC.png')} 
          style={styles.logo}
        />

        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {isMenuOpen && (
        <View style={styles.dropdown}>
          {['Accueil', 'A propos', 'Actualités', 'Contact'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#000032',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  logo: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  menuIcon: {
    padding: 5,
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    right: 0,
    backgroundColor: '#dcdcdc',
    width: 150,
    borderLeftWidth: 1,
    borderColor: '#aaa',
  },
  dropdownItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});