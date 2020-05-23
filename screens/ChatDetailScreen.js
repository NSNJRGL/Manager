import React from 'react';
import {View, StyleSheet, TouchableOpacity, CameraRoll} from 'react-native';
import {
  GiftedChat,
  Bubble,
  Send,
  Actions,
  MessageImage,
} from 'react-native-gifted-chat';
import {Icon, Text, Button} from '@ui-kitten/components';
import {YellowBox} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';
import uuid from 'react-native-uuid';

import CustomTopNavigation from '../components/CustomTopNavigation';
import firebaseSvc from '../services/Firebase';
import UI from '../constants/UI';
import LoadingChat from '../components/LoadingChat';
import ImageLoading from '../components/ImageLoading';
import EmptyChat from '../components/EmptyChat';

class ChatDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUserId: props.route.params.current_user_id,
      receiverId: props.route.params.receiver_id,
      fileUrl: null,
      text: '',
      isLoading: true,
      isImageLoading: false,
    };

    this.onHandlePic = this.onHandlePic.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.downloadImage = this.downloadImage.bind(this);
    this.renderMessageImage = this.renderMessageImage.bind(this);
  }

  componentDidMount() {
    YellowBox.ignoreWarnings(['Animated']);
    this.props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: false,
    });

    firebaseSvc.refOn(
      (message) =>
        this.setState((previousState) => ({
          messages: GiftedChat.append(previousState.messages, message),
          isLoading: false,
          isImageLoading: false,
        })),
      this.state.currentUserId,
      this.state.receiverId,
    );
  }

  componentWillUnmount() {
    this.props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: true,
    });

    firebaseSvc.refOff();
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: UI.primary,
            padding: 5,
            borderRadius: 40,
          },
          left: {
            backgroundColor: '#F1EFF2',
          },
        }}
      />
    );
  }

  onHandlePic() {
    ImagePicker.openPicker({
      multiple: false,
    }).then(async (response) => {
      this.setState({isImageLoading: true});
      try {
        let uploadUrl = await firebaseSvc.uploadImage(response.path);
        this.setState({fileUrl: uploadUrl});
        if (this.state.text === '') {
          const message = [
            {
              _id: firebaseSvc.uid(),
              text: '',
              numberStamp: new Date(),
              user: {
                name: firebaseSvc.name(),
                email: firebaseSvc.email(),
                avatar: firebaseSvc.avatar(),
                id: firebaseSvc.uid(),
                _id: firebaseSvc.uid(),
              },
            },
          ];

          firebaseSvc.send(
            message,
            this.state.fileUrl,
            this.state.currentUserId,
            this.state.receiverId,
          );

          this.setState({fileUrl: ''});
        }
      } catch (err) {
        console.log('onImageUpload error:' + err.message);
      }
    });
  }

  renderAction(props) {
    return (
      <Actions
        {...props}
        options={{
          ['Зураг сонгох']: this.onHandlePic,
        }}
        icon={() => <Icon name="camera" fill="#FA434A" />}
      />
    );
  }

  renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendButton}>
          <Text category="h6">Илгээх</Text>
        </View>
      </Send>
    );
  }

  downloadImage(imageSource) {
    let dirs = RNFetchBlob.fs.dirs;
    let path = dirs.DownloadDir + '/' + 'zurag0.jpg';
    RNFetchBlob.config({
      fileCache: true,
      indicator: true,
      path: path,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: path,
        description: 'Зураг татагдаж байна',
      },
    })
      .fetch('GET', imageSource)
      .progress((received, total) => {
        console.log('progress', received / total);
      })
      .then((res) => {
        console.log(res, 'end downloaded');
      });
  }

  renderMessageImage(props) {
    return (
      <>
        <Button
          appearance="ghost"
          size="small"
          style={styles.button}
          accessoryLeft={(props) => (
            <Icon {...props} fill="#FA434A" name="download-outline" />
          )}
          onPress={() => this.downloadImage(props.currentMessage.image)}
        />
        <MessageImage
          {...props}
          style={styles.image}
          source={{uri: props.currentMessage.image}}
        />
      </>
    );
  }

  renderEmptyMessage() {
    return <EmptyChat />;
  }

  render() {
    return (
      <React.Fragment>
        <CustomTopNavigation
          title={this.props.route.params.title}
          leftIcon={true}
          navigation={this.props.navigation}
        />
        <View style={styles.container}>
          <>
            {this.state.isLoading && this.state.messages.length > 0 && (
              <LoadingChat />
            )}
            {this.state.isImageLoading && <ImageLoading />}
            <GiftedChat
              messages={this.state.messages}
              isTyping={true}
              text={this.state.text}
              onSend={(newMessages) => {
                firebaseSvc.send(
                  newMessages,
                  this.state.fileUrl,
                  this.state.currentUserId,
                  this.state.receiverId,
                );
                this.setState({fileUrl: ''});
              }}
              user={{
                name: firebaseSvc.name(),
                email: firebaseSvc.email(),
                avatar: firebaseSvc.avatar(),
                id: firebaseSvc.uid(),
                _id: firebaseSvc.uid(),
              }}
              placeholder="Tа энд дарж мессежээ бичнэ үү!"
              renderBubble={this.renderBubble}
              renderActions={this.renderAction}
              renderLoading={() => <LoadingChat />}
              renderSend={this.renderSend}
              alwaysShowSend={true}
              onInputTextChanged={(text) => this.setState({text})}
              infiniteScroll={true}
              renderMessageImage={(props) => this.renderMessageImage(props)}
              renderChatEmpty={this.renderEmptyMessage}
            />
          </>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    zIndex: 1001,
  },
  sendButton: {
    marginRight: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
});

export default ChatDetailScreen;
