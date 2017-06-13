import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      recipientFirstName: '',
      recipientLastName: ''
    }
  }

  componentDidMount () {
    axios.get(`http://127.0.0.1:3000/api/events/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({
          title: data.title,
          recipientFirstName: data.recipient.first_name,
          recipientLastName: data.recipient.last_name
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <Text>A PepClock Lovingly Created for {this.state.recipientFirstName} {this.state.recipientLastName} </Text>
      </View>
    );
  }
}

export default Event;

// {this.props.match.params.url}
