import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo';
import VideoContribution from './VideoContribution';
import styles from '../styles/main';

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
        <View style={styles.listItem}>
          <Image
            source={{uri: this.props.contribution.media_url}}
            style={{width: 300, height: 300}}
          />
          <Text style={styles.listItemLabel}>{this.props.contribution.text}</Text>
        </View>
      );
    }

    if (this.props.contribution.type === 'video') {
      return (
        <View style={styles.listItem}>
          <VideoContribution url={this.props.contribution.media_url} />
          <Text style={styles.listItemLabel}>{this.props.contribution.text}</Text>
        </View>
      );
    }

    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemLabel}>{this.props.contribution.text}</Text>
      </View>
    );
  }
}

export default ContributionListItem;
