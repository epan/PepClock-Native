import React from 'react';
import { StyleSheet } from 'react-native';
import { colors, spacing } from './variables';

const main = StyleSheet.create({
  inputField: {
    padding: 10,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    borderRadius: 0
  },
  inputFieldTag: {
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 10,
  },
  container: {
    marginTop: 0,
    padding: 20,
    alignItems: 'center',
    // backgroundColor: 'grey'
  },
  header: {
    fontSize: 20
  },
  content: {
    width: '100%'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    // backgroundColor: colors.brand
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
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 34,
    marginBottom: 10
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 6
  },
  baseText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333'
  },
  dateText: {
    fontSize: 17,
    lineHeight: 26,
    textAlign: 'left'
  },
  back: {
    width: 300,
    height: 200,
    zIndex: 0
  },
  front: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    marginLeft: -25,
    marginTop: -25,
    zIndex: 1
  },
  listItem: {
    marginBottom: 30,
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ccc'
  },
  listItemLabel: {
    marginTop: 3,
    fontWeight: '500'
  },
  itemAuthor: {
    fontStyle: 'italic'
  },
  button: {
    borderRadius: 100,
    backgroundColor: colors.brand,
    borderWidth: 3,
    borderColor: colors.brandDark,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default main;
