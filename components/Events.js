import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
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
        console.log(data);
        let events = data.map(({ event }) => event.title);
        console.log(events);

        this.setState({events: events});
      })
      .catch((err) => console.log(err));
  }

  render () {
    return (
      <View>
        <Text>Event List</Text>
        <FlatList
          data={this.state.events}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
export default Events;
