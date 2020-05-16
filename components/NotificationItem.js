import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem, Icon} from '@ui-kitten/components';

export const NotificationItem = (props) => {
  const {message, ...listItemProps} = props;

  const renderMessageDate = (style) => (
    <View style={styles.dateContainer}>
      {message.isRead && (
        <Icon
          {...style}
          width={16}
          height={16}
          fill="#FA434A"
          name="radio-button-on"
        />
      )}
    </View>
  );

  return (
    <ListItem
      {...listItemProps}
      title={message.fullName}
      description={message.text}
      accessoryRight={renderMessageDate}
      onPress={() => {
        props.onPressNotification(message);
      }}
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

export default NotificationItem;
