import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {Spinner} from '@ui-kitten/components';
import UI from '../constants/UI';

import CustomTopNavigation from '../components/CustomTopNavigation';
import firebaseSvc from '../services/Firebase';

class ChatDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUserId: props.route.params.current_user_id,
      receiverId: props.route.params.receiver_id,
    };
  }

  componentDidMount() {
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

    firebaseSvc.refOff();
  }

  renderLoading() {
    return <Spinner size="tiny" />;
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
});

export default ChatDetailScreen;
