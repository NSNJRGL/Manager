import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, ListItem, Text, Icon} from '@ui-kitten/components';

export const ChatItem = (props) => {
  const {message, ...listItemProps} = props;

  const renderMessageDate = (style, index) => (
    <View style={styles.dateContainer}>
      {message.isRead && (
        <Icon
          {...style}
          width={16}
          height={16}
          fill="#FA434A"
          name="done-all"
        />
      )}
      <Text style={styles.dateText} appearance="hint" category="c1">
        {message.date}
      </Text>
    </View>
  );

  const renderProfileAvatar = () => (
    <Avatar
      style={styles.avatar}
      source={require('../assets/images/user-profile.jpg')}
    />
  );

  return (
    <ListItem
      {...listItemProps}
      title={message.fullName}
      description={message.text}
      accessoryLeft={renderProfileAvatar}
      accessoryRight={renderMessageDate}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    tintColor: null,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    textAlign: 'right',
    minWidth: 64,
  },
});

export default ChatItem;
