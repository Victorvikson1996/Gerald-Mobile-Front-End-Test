import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../utils';
import {Header} from '../components/Header';

const StartScreen = () => {
  const onPress = () => {
    console.log('PRESS');
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <Header onPress={onPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default StartScreen;
