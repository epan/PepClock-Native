import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import styles from './styles/main';
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
                to='/events'
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
