import React from 'react';
import { StyleSheet } from 'react-native';
import { colors, spacing } from './variables';

const main = StyleSheet.create({
  inputField: {
    padding: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: 300
  },
  container: {
    marginTop: 25,
    padding: 10,
    alignItems: 'center'
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: 'center',
    fontSize: 15
  }
});

export default main;
