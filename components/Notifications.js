import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import axios from 'axios';

class Notifications extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      invites: []
    }
  }

  componentDidMount () {
    axios.get('http://127.0.0.1:3000/api/invitations')
      .then(({ data }) => {
        console.log(data)
        let invitations = data.map(invite => { return {eventId: invite.event_id, title: invite.event.title, inviteId: invite.id}});
        console.log(invitations)
        this.setState({invites: invitations})
      })
  }

  render () {
    return (
      <View>
        <Text>Notifications</Text>
        <FlatList
          data={this.state.invites}
          keyExtractor={item => item.inviteId}
          renderItem={({item}) => <Link to={`events/${item.eventId}?invite=${item.inviteId}`}><Text>{item.title}</Text></Link>}
        />
      </View>
    );
  }
}

export default Notifications;
