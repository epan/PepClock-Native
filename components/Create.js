import React from 'react';
import { StyleSheet, TextInput, Text, View, DatePickerIOS, ScrollView, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TagInput from 'react-native-tag-input';
import Button from 'apsl-react-native-button';
import axios from 'axios';
import styles from '../styles/main';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventId: 0,
      eventName: '',
      firstName: '',
      lastName: '',
      email: '',
      deliveryTime: new Date(),
      tags: [],
      isDateTimePickerVisible: false
    };
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (deliveryTime) => {
    this.setState({ deliveryTime });

    this._hideDateTimePicker();
  };

  handleChangeTags(tags) {
    this.setState({ tags });
  };

  handleSubmit() {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/api/events',
      data: {
        eventName: this.state.eventName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        deliveryTime: this.state.deliveryTime,
        inviteEmails: this.state.tags
      }
    }).then(response => {
      this.setState({eventId: response.data.id, redirectToEvent: true});
      console.log("Success!");
    }).catch(error => {
      console.log(error);
    });
  }


  render () {
    const inputProps = {
      keyboardType: 'default',
      placeholder: 'invite emails',
      autoFocus: false,
    };
    return (
      <ScrollView>
        <View>
          <Text style={styles.titleText}>Create a new PepClock</Text>
        </View>
        <View>
          <Text style={styles.baseText}>Name your event</Text>
          <TextInput style={styles.inputField}
            placeholder="e.g. Happy Birthday Lisa!" onChangeText={(eventName) => this.setState({eventName})}
            value={this.state.eventName}>
          </TextInput>
        </View>
        <View>
          <Text style={styles.baseText}>Recipient's first name</Text>
          <TextInput style={styles.inputField}
            placeholder="Lisa" onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}>
          </TextInput>
        </View>
        <View>
          <Text style={styles.baseText}>Recipient's last name</Text>
          <TextInput style={styles.inputField}
            placeholder="Johnson" onChangeText={(lastName) => this.setState({lastName})}
            value={this.state.lastName}>
          </TextInput>
        </View>
        <View>
          <Text style={styles.baseText}>Recipient's email</Text>
          <TextInput style={styles.inputField}
            placeholder="lisa@gmail.com" onChangeText={(email) => this.setState({email})}
            value={this.state.email}>
          </TextInput>
        </View>
        <View>
          <Text style={styles.baseText}>Delivery time</Text>
          <Button style={styles.inputField} textStyle={[styles.baseText, styles.dateText]} onPress={this._showDateTimePicker}>
            {`${this.state.deliveryTime.toLocaleDateString()} ${this.state.deliveryTime.toLocaleTimeString()}`}
          </Button>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode='datetime'
          />
        </View>
        <Text style={styles.baseText}>Invite collaborators</Text>
        <View style={[styles.inputField, styles.inputFieldTag]}>
          <TagInput value={this.state.tags} onChange={this.handleChangeTags.bind(this)} inputProps={inputProps}/>
        </View>
        <Button onPress={this.handleSubmit.bind(this)} style={styles.button} textStyle={styles.buttonText}>Create your event</Button>
      </ScrollView>


    );
  }
}

export default Create;
