import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import ContributionList from './ContributionList';

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
    console.log(this.props)
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

    if (this.props.location.search.length) {
      axios.get('http://127.0.0.1:3000' + this.props.location.pathname + this.props.location.search)
        .then(() => null)
      // console.log(this.props.location.pathname + this.props.location.search)
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.title}</Text>
        <Text>A PepClock Lovingly Created for {this.state.recipientFirstName} {this.state.recipientLastName} </Text>
        <ContributionList
          eventId={this.props.match.params.id}
        />
      </View>
    );
  }
}

export default Event;

// {this.props.match.params.url}
