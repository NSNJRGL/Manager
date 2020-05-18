import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GiftedChat, Bubble, Send, Actions} from 'react-native-gifted-chat';
import {Button, Icon, Text} from '@ui-kitten/components';
import {YellowBox} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import CustomTopNavigation from '../components/CustomTopNavigation';
import firebaseSvc from '../services/Firebase';
import Loading from '../components/Loading';
import UI from '../constants/UI';

const PlusButton = (props) => <Icon {...props} name="plus-circle" />;

class ChatDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUserId: props.route.params.current_user_id,
      receiverId: props.route.params.receiver_id,
      filePath: null,
      fileData: null,
      fileUrl: null,
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
        })),
      this.state.currentUserId,
      this.state.receiverId,
    );
  }

  componentWillUnmount() {
    this.props.navigation.dangerouslyGetParent().setOptions({
      tabBarVisible: true,
    });
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
    let options = {
      title: 'Зургаа сонгоно уу',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        this.setState({filePath: response});
        this.setState({fileData: response.data});
        this.setState({fileUrl: response.uri});
      }
    });
  }

  renderAction(props) {
    return (
      <Actions
        {...props}
        options={{
          ['Send Image']: this.onHandlePic,
        }}
        icon={() => <Icon name="camera" fill="#FA434A" />}
        onSend={(args) => console.log(args)}
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
          <GiftedChat
            messages={this.state.messages}
            isTyping={true}
            onSend={(newMessages) =>
              firebaseSvc.send(
                newMessages,
                this.state.fileUrl,
                this.state.currentUserId,
                this.state.receiverId,
              )
            }
            user={{
              name: firebaseSvc.name(),
              email: firebaseSvc.email(),
              avatar: firebaseSvc.avatar(),
              id: firebaseSvc.uid(),
              _id: firebaseSvc.uid(),
            }}
            placeholder="Tа энд дарж мессежээ илгээнэ үү!"
            renderBubble={this.renderBubble}
            renderActions={this.renderAction}
            renderLoading={() => <Loading />}
            renderSend={this.renderSend}
          />
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
