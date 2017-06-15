import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import styles from './styles/main';
import Events from './components/Events';
import Login from './components/Login';
import Event from './components/Event';
import Create from './components/Create';
import Notifications from './components/Notifications';
import ContributionForm from './components/ContributionForm';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
            <View style={styles.nav}>
              <Link
                to='/'
                style={styles.navItem}>
                  <Text>Events</Text></Link>
              <Link
                to='/create'
                style={styles.navItem}>
                  <Text>Create</Text></Link>
            </View>

          <Route exact path='/' component={Events}/>
          <Route path='/login' component={Login}/>
          <Route path='/events/:id' component={Event}/>
          <Route path='/create' component={Create}/>
          <Route path='/notifications' component={Notifications}/>
          <Route path='/contributionform' component={ContributionForm}/>
        </View>
      </NativeRouter>
    );
  }
}
