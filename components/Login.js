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
  }

  submitLogin () {
    axios.post('http://www.pepclockapp.com/api/mobile/login', {
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

  render() {
    if ( this.state.isAuthed ) {
      return <Redirect to="/" />;
    }

    return (
      <View style={styles.content}>
        <Text>{this.state.failMessage}</Text>
        <Text>Username</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(email) => { this.setState({email}); }}
          value={this.state.email}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType="email-address"
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
      </View>
    );
  }
}

export default Login;
