import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils';

const DrawerTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Beka</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '50%',
    alignItems: 'center',
    marginBottom: 50,
  },
  text: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '900',
  },
});

export default DrawerTitle;
