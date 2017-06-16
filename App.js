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
        <View>
          <View style={styles.nav}>
            <Link
              to='/'
              style={styles.navItem}>
                <Text style={styles.buttonText}>Events</Text></Link>
            <Link
              to='/create'
              style={styles.navItem}>
                <Text style={styles.buttonText}>Create</Text></Link>
          </View>
          <View style={styles.container}>
            <Route exact path='/' component={Events}/>
            <Route path='/login' component={Login}/>
            <Route path='/events/:id' component={Event}/>
            <Route path='/create' component={Create}/>
            <Route path='/notifications' component={Notifications}/>
            <Route path='/contributionform' component={ContributionForm}/>
          </View>
      </View>
      </NativeRouter>
    );
  }
}
