import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import axios from 'axios';

class Notifications extends React.Component {
  constructor (props) {
    super(props);

  }


  render () {
    return (
      <View>
        <Text>Notifications</Text>
        <FlatList
          data={this.props.invites}
          keyExtractor={item => item.inviteId}
          renderItem={({item}) => {
            return (
              <Link to={`events/${item.eventId}?invite=${item.inviteId}`}>
                <Text>{item.title} FOR {item.recipientFirstName} {item.recipientLastName}</Text>
              </Link>
            );
          }}
        />
      </View>
    );
  }
}

export default Notifications;
