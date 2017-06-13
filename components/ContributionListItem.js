import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Video } from 'expo';

class ContributionListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playbackObject: null
    };

    this._handleVideoRef = this._handleVideoRef.bind(this);
    this.handleVideoTap = this.handleVideoTap.bind(this);
  }

  _handleVideoRef (component) {
    const playbackObject = component;
    this.setState({playbackObject: playbackObject});
  }

  handleVideoTap (component) {
    console.log('component is:', component);
    console.log('video touched');
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
          <TouchableOpacity onPress={this.handleVideoTap}>
            <Video
              source={{uri: this.props.contribution.media_url}}
              ref={this._handleVideoRef}
              style={{width: 300, height: 300}}
              onLoad={(component) => {
                this.state.playbackObject.playAsync(component);
              }}
              isLooping={true}
            />
          </TouchableOpacity>
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
