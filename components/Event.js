import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import ContributionList from './ContributionList';
import ContributionForm from './ContributionForm';
import styles from '../styles/main';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      recipientFirstName: '',
      recipientLastName: '',
      contributions: []
    };
    this.getContributions = this.getContributions.bind(this);
  }

  componentDidMount () {
    axios.get(`http://www.pepclockapp.com/api/events/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({
          title: data.title,
          recipientFirstName: data.recipient.first_name,
          recipientLastName: data.recipient.last_name
        });
      })
      .then(() => { this.getContributions(); })
      .catch((error) => {
        console.log(error);
      });

    if (this.props.location.search.length) {
      axios.get('http://www.pepclockapp.com' + this.props.location.pathname + this.props.location.search)
        .then(() => null);
    }
  }

  getContributions() {
    axios.get(`http://www.pepclockapp.com/api/contributions/events/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({contributions: data});
      });
  }

  render() {
    return (
      <ScrollView style={styles.content}>
        <Text style={styles.titleText}>{this.state.title}</Text>
        <Text style={styles.h2}>
          A PepClock lovingly created for {this.state.recipientFirstName} {this.state.recipientLastName}
        </Text>
        <ContributionList
          eventId={this.props.match.params.id}
          contributions={this.state.contributions}
        />
        <ContributionForm
          eventId={this.props.match.params.id}
          getContributions={this.getContributions}
        />
      </ScrollView>
    );
  }
}

export default Event;
