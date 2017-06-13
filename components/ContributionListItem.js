import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo';
import VideoContribution from './VideoContribution';

class ContributionListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playbackObject: null
    };
  }

  render() {
    if (this.props.contribution.type === 'image') {
      return (
        <View>
          <Image
            source={{uri: this.props.contribution.media_url}}
            style={{width: 300, height: 300}}
          />
          <Text>{this.props.contribution.text}</Text>
        </View>
      );
    }

    if (this.props.contribution.type === 'video') {
      return (
        <View>
          <VideoContribution url={this.props.contribution.media_url} />
          <Text>{this.props.contribution.text}</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>{this.props.contribution.text}</Text>
      </View>
    );
  }
}

export default ContributionListItem;
