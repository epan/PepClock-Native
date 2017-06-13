import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Video } from 'expo';

const styles = StyleSheet.create({
  back: {
    width: 300,
    height: 200,
    zIndex: 0
  },
  front: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 50,
    height: 50,
    marginLeft: -25,
    marginTop: -25,
    zIndex: 1
  }
});

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
    const playIcon = 'https://d2ppvlu71ri8gs.cloudfront.net/items/1Z0I3a1e0L373s0K3e1u/play_icon.png';
    const icon = this.state.isPlaying
      ? null
      : <Image source={{uri: playIcon}} style={styles.front} />;

    return (
      <TouchableOpacity onPress={this.handleVideoTap}>
        {icon}
        <Video
          source={{uri: this.props.url}}
          ref={this._handleVideoRef}
          resizeMode={'Expo.Video.RESIZE_MODE_STRETCH'}
          style={styles.back}
          onLoad={ loadedVideo => this.setState({ loadedVideo }) }
          isLooping={true}
        />
      </TouchableOpacity>
    );
  }
}

export default VideoContribution;
