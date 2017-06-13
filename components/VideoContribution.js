import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
    return (
      <TouchableOpacity onPress={this.handleVideoTap}>
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
