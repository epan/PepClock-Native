import React from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import ContributionListItem from './ContributionListItem';

class ContributionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:3000/api/contributions/events/${this.props.eventId}`)
      .then(({ data }) => {
        this.setState({contributions: data});
      });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.contributions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ContributionListItem contribution={item} />}
        />
      </View>
    );
  }
}

export default ContributionList;
