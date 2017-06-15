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
    const { text, type, media_url, user: { first, last } } = this.props.contribution;

    if (type === 'image') {
      return (
        <View style={styles.listItem}>
          <Image
            source={{uri: media_url}}
            style={{width: 300, height: 300}}
          />
          <Text style={[styles.baseText, styles.listItemLabel]}>{text}</Text>
          <Text style={[styles.baseText, styles.itemAuthor]}>{`${first} ${last}`}</Text>
        </View>
      );
    }

    if (type === 'video') {
      return (
        <View style={styles.listItem}>
          <VideoContribution url={media_url} />
          <Text style={[styles.baseText, styles.listItemLabel]}>{text}</Text>
        </View>
      );
    }

    return (
      <View style={styles.listItem}>
        <Text style={[styles.baseText, styles.listItemLabel]}>{text}</Text>
      </View>
    );
  }
}

export default ContributionListItem;
