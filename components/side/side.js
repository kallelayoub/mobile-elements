import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Accueil</Text>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawer}>
      <Image source={require('./assets/enetcom_logo.png')} style={styles.logo} />

      <DrawerItem
        label="Accueil"
        labelStyle={styles.label}
        icon={() => <Icon name="home" size={20} color="#fff" />}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="À Propos"
        labelStyle={styles.label}
        icon={() => <Icon name="plus" size={20} color="#fff" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Notifications"
        labelStyle={styles.label}
        icon={() => <Icon name="bell" size={20} color="#fff" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Messages"
        labelStyle={styles.label}
        icon={() => <Icon name="mail" size={20} color="#fff" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Actualité"
        labelStyle={styles.label}
        icon={() => <Icon name="file-text" size={20} color="#fff" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Profil"
        labelStyle={styles.label}
        icon={() => <Icon name="user" size={20} color="#fff" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Autres"
        labelStyle={styles.label}
        icon={() => <Icon name="more-horizontal" size={20} color="#fff" />}
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#020C40',
            width: 240,
          },
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#020C40',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    color: '#fff',
    fontWeight: '600',
  },
});