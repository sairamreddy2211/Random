import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {randomIcon, D2FIcon, chatIcon, profileIcon} from '../imageExports';
import {useNavigation} from '@react-navigation/native';
import {MenuItem} from '../models.js';

function NavDrawer() {
  const menuItems: MenuItem[] = [
    {
      name: 'Random',
      iconUrl: randomIcon,
      activeIconUrl: 'https://example.com/icons/home_active.png',
      navigationUrl: 'Home',
    },
    {
      name: 'DTF',
      iconUrl: D2FIcon,
      activeIconUrl: 'https://example.com/icons/explore_active.png',
      navigationUrl: 'DTF',
    },
    {
      name: 'Chat',
      iconUrl: chatIcon,
      activeIconUrl: 'https://example.com/icons/notifications_active.png',
      navigationUrl: 'Chat',
    },
    {
      name: 'Profile',
      iconUrl: profileIcon,
      activeIconUrl: 'https://example.com/icons/profile_active.png',
      navigationUrl: 'Home',
    },
  ];

  // const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      {menuItems?.map((item: MenuItem) => (
        <View key={item.name}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(item.navigationUrl, {name: item.name})
            }>
            <Image style={styles.menuIcon} source={item.iconUrl} />
          </TouchableOpacity>
          {/* <Text styles>{item.name}</Text> */}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingVertical: 15,
    borderTopWidth: 0.2,
    borderColor: 'grey',
  },
  menuIcon: {
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
});

export default NavDrawer;
