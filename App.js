import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Dashboard from './Dashboard';
import Events from './Events';
import Login from './Login';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
            <Text>Hello PepClock-Native</Text>
            <View style={styles.nav}>
              <Link
                to='/'
                underlayColor='#f0f4f7'
                style={styles.navItem}>
                  <Text>Dashboard</Text></Link>
              <Link
                to='/events'
                style={styles.navItem}>
                  <Text>Events</Text></Link>
              <Link
                to='/login'
                style={styles.navItem}>
                  <Text>Login</Text></Link>
            </View>

          <Route exact path='/' component={Dashboard}/>
          <Route path='/events' component={Events}/>
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
