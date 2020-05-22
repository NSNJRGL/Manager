import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GiftedChat, Bubble, Send, Actions} from 'react-native-gifted-chat';
import {Icon, Text} from '@ui-kitten/components';
import {YellowBox} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import CustomTopNavigation from '../components/CustomTopNavigation';
import firebaseSvc from '../services/Firebase';
import UI from '../constants/UI';
import LoadingChat from '../components/LoadingChat';

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
    };

    this.onHandlePic = this.onHandlePic.bind(this);
    this.renderAction = this.renderAction.bind(this);
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
    }).then((response) => {
      this.setState({fileUrl: response.path});
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
            {this.state.isLoading && <LoadingChat />}
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
  },
  sendButton: {
    marginRight: 20,
    marginBottom: 15,
  },
});

export default ChatDetailScreen;
