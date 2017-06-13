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

  _handleVideoRef (component) {
    const playbackObject = component;
    this.setState({playbackObject: playbackObject});
  }

  handleVideoTap (component) {
    console.log('component is:', component);
    console.log('video touched');
  }

  render () {
    return (
      <TouchableOpacity onPress={this.handleVideoTap}>
        <Video
          source={{uri: this.props.url}}
          ref={this._handleVideoRef}
          style={{width: 300, height: 300}}
          onLoad={(component) => {
            this.state.playbackObject.playAsync(component);
          }}
          isLooping={true}
        />
      </TouchableOpacity>
    );
  }
}

export default VideoContribution;
