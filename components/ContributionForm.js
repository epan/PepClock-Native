import React from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Exponent, {
  Constants,
  ImagePicker,
  registerRootComponent,
} from 'exponent';
import ColorButton from 'apsl-react-native-button';
import axios from 'axios';
import styles from '../styles/main';

export default class ContributionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      uploading: false,
      text: '',
      contributionType: 'message'
    };
  }

  render() {
    let { image } = this.state;

    return (
      <View style={styles.marginBottom}>
        <Text style={styles.baseText}>
          Enter your message
        </Text>

        <TextInput
          editable = {true}
          maxLength = {200}
          multiline = {true}
          numberOfLines = {4}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={styles.inputField}
        />

        { this._maybeRenderImage() }
        { this._maybeRenderUploadingOverlay() }
        { this._maybeRenderImageButtons() }

        <ColorButton style={styles.button} textStyle={styles.buttonText} onPress={this._handleSubmit}>
          Create Post
        </ColorButton>


        <StatusBar barStyle="default" />
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center'}]}>
          <ActivityIndicator
            color="#fff"
            animating
            size="large"
          />
        </View>
      );
    }
  }

  _maybeRenderImage = () => {
    let { image } = this.state;
    if (!image) {
      return;
    }

    return (
      <View style={{
        marginTop: 5,
        width: 250,
        borderRadius: 3,
      }}>
        <View style={{borderTopRightRadius: 3, borderTopLeftRadius: 3, overflow: 'hidden'}}>
          <Image
            source={{uri: image}}
            style={{width: 250, height: 250}}
          />
        </View>
      </View>
    );
  }

  _maybeRenderImageButtons = () => {
    let { image } = this.state;
    if (!image) {
      return (
        <View>
          <Button
            onPress={this._pickImage}
            title="Pick an image from camera roll"
          />

          <Button
            onPress={this._takePhoto}
            title="Take a photo"
          />
        </View>
      );
    }
  }

  _takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4,3]
    });

    this._handleImagePicked(pickerResult);
  }

  _pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4,3]
    });

    this._handleImagePicked(pickerResult);
  }

  _handleImagePicked = async (pickerResult) => {
    let uploadResponse, uploadResult;

    try {
      this.setState({uploading: true});

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
        this.setState({image: uploadResult.location, contributionType: 'image'});
      }
    } catch(e) {
      console.log({e});
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({uploading: false});
    }
  }

  _handleSubmit = () => {
    axios({
      method: 'post',
      url: 'http://www.pepclockapp.com/api/contributions',
      data: {
        eventId: this.props.eventId,
        contributionText: this.state.text,
        contributionType: this.state.contributionType,
        contributionMediaUrl: this.state.image
      }
    })
    .then(res => {
      this.setState({
        text: '',
        contributionType: 'message',
        image: null
      });
      this.props.getContributions();
    })
    .catch(err => {
      console.log('Error in ContributionForm Submit', err);
    });
  }
}

async function uploadImageAsync(uri) {
  let apiUrl = 'http://www.pepclockapp.com/api/uploads';
  console.log('uploadImageAsync was called');


  let uriParts = uri.split('.');
  let fileType = uri[uri.length - 1];

  let formData = new FormData();
  formData.append('media', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };
  return fetch(apiUrl, options);
}
