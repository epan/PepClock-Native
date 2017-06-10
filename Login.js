import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Redirect } from 'react-router-native';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isAuthed: false,
      failMessage: ''
    }

    this.submitLogin = this.submitLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  submitLogin () {
    axios.post('http://127.0.0.1:3000/login/mobile', {
      email: this.state.email.trim(),
      password: this.state.password
    }).then(({ data: authed }) => {
      if (authed) {
        this.setState({ isAuthed: true })
      } else {
        this.setState({ failMessage: 'yo ass aint logged in!'})
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  logout () {
    axios.get('http://127.0.0.1:3000/logout')
      .then(response => console.log(response))
  }

  render() {
    if ( this.state.isAuthed ) {
      return <Redirect to="/events" />
    }

    return (
      <View style={{width: 300}}>
        <Text>{this.state.failMessage}</Text>
        <Text>Username</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => { this.setState({email}) }}
          value={this.state.email}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Text>Password</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => { this.setState({password}) }}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Button
          onPress={this.submitLogin}
          title='Log your ass in!'
        />
        <Button
          onPress={this.logout}
          title='Log your ass out!'
        />
      </View>
    )
  }
}

export default Login;
