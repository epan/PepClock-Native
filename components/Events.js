import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:3000/api/events/users')
      .then(({ data }) => {
        let events = data.map(({ event }) => ({ id: event.id, title: event.title}));
        this.setState({events: events});
      })
      .catch(err => console.log(err));
  }

  render () {
    return (
      <View>
        <Text>Event List</Text>
        <FlatList
          data={this.state.events}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Link to={`events/${item.id}`}><Text>{item.title}</Text></Link>}
        />
      </View>
    );
  }
}

export default Events;
