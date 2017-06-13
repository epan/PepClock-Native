import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { Video } from 'expo';

class VideoContribution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playbackObject: null,
      loadedVideo: null,
      isPlaying: false
    };

    this._handleVideoRef = this._handleVideoRef.bind(this);
    this.handleVideoTap = this.handleVideoTap.bind(this);
  }

  _handleVideoRef (playbackObject) {
    this.setState({ playbackObject });
  }

  handleVideoTap () {
    if (this.state.isPlaying) {
      this.state.playbackObject.pauseAsync(this.state.loadedVideo);
    } else {
      this.state.playbackObject.playAsync(this.state.loadedVideo);
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  render () {
    const message = this.state.isPlaying ? '' : 'dis here be video';
    return (
      <TouchableOpacity onPress={this.handleVideoTap}>
        <Text>
          {message}
        </Text>
        <Video
          source={{uri: this.props.url}}
          ref={this._handleVideoRef}
          style={{width: 300, height: 300}}
          onLoad={ loadedVideo => this.setState({ loadedVideo }) }
        />
      </TouchableOpacity>
    );
  }
}

export default VideoContribution;
