import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  submitLogin () {
    Alert.alert('this.state.email')
  }

  render() {
    return (
      <View style={{width: 300}}>
        <Text>Username</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => { this.setState({email}) }}
          value={this.state.email}
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
      </View>
    );
  }
}

export default Login;
