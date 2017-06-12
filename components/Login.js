import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Redirect } from 'react-router-native';
import axios from 'axios';
import styles from '../styles/main';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isAuthed: false,
      failMessage: ''
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  submitLogin () {
    axios.post('http://127.0.0.1:3000/api/mobile/login', {
      email: this.state.email.trim(),
      password: this.state.password
    }).then(({ data: authed }) => {
      if (authed) {
        this.setState({ isAuthed: true });
      } else {
        this.setState({ failMessage: 'Incorrect email or password' });
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  logout () {
    axios.get('http://127.0.0.1:3000/logout')
      .then(response => {
        this.setState({failMessage: 'logged out'});
      });
  }

  render() {
    if ( this.state.isAuthed ) {
      return <Redirect to="/" />;
    }

    return (
      <View>
        <Text>{this.state.failMessage}</Text>
        <Text>Username</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(email) => { this.setState({email}); }}
          value={this.state.email}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(password) => { this.setState({password}); }}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Button
          onPress={this.submitLogin}
          title='Log in'
        />
        <Button
          onPress={this.logout}
          title='Log out'
        />
      </View>
    );
  }
}

export default Login;
