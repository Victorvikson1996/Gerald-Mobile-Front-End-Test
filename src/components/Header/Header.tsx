import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {MenuIcon} from '../Icon';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../utils';

type Props = {
  onPress: () => void;
};

const Header = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.container}>
      <MenuIcon />
      <View style={styles.textContainer}>
        <Text style={styles.text}>START</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.grey,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 20,
  },
});

export default Header;
