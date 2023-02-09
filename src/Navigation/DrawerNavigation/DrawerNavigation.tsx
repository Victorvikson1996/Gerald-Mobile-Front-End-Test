import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {Node} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {COLORS} from '../../utils';

const Drawer = createDrawerNavigator();

const ScreenOptions = {
  headerShown: false,
  cardStyle: {
    borderTopLeftRadius: 45,
    backgroundColor: 'transparent',
  },
};

const DrawerNavigation = () => {
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  drawer: {
    backgroundColor: COLORS.drawerBackgroundColor,
    borderTopLeftRadius: 38,
    width: '100%',
  },
  drawerItem: {
    borderRadius: 15,
    justifyContent: 'center',
    paddingLeft: 30,
    marginLeft: 20,
    marginVertical: 15,
    width: '50%',
    height: 55,
  },
  drawerItemLabel: {
    fontFamily: 'Avenir-Roman',
    fontSize: 20,
  },
  stack: {
    flex: 1,
  },
  content: {
    zIndex: 1,
  },
});

const DrawerItemProps = {
  labelStyle: styles.drawerItemLabel,
  inactiveBackgroundColor: 'transparent',
  activeBackgroundColor: COLORS.activeBackgroundColor,
  activeTintColor: COLORS.activeTintColor,
  inactiveTintColor: COLORS.white,
};

export default DrawerNavigation;
