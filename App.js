import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Events from './components/Events';
import Login from './components/Login';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
            <Text>Hello PepClock-Native</Text>
            <View style={styles.nav}>
              <Link
                to='/'
                style={styles.navItem}>
                  <Text>Events</Text></Link>
              <Link
                to='/login'
                style={styles.navItem}>
                  <Text>Login</Text></Link>
            </View>

          <Route exact path='/' component={Events}/>
          <Route path='/login' component={Login}/>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
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
