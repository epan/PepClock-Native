import React from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import ContributionListItem from './ContributionListItem';

class ContributionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`http://www.pepclockapp.com/api/contributions/events/${this.props.eventId}`)
      .then(({ data }) => {
        this.setState({contributions: data});
      });
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
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
