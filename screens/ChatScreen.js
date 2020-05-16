import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Divider} from '@ui-kitten/components';
import ChatItem from '../components/ChatItem';

import CustomTopNavigation from '../components/CustomTopNavigation';

const initialData = new Array(1).fill({
  text: 'Hey! How are you?',
  date: '4:30 PM',
  isRead: true,
  fullName: 'B.Nasanjargal',
});

const ChatScreen = ({navigation}) => {
  const onItemPress = () =>
    navigation && navigation.navigate('ChatDetail', {title: 'B.Nasanjargal'});

  const renderItem = (info) => {
    return (
      <>
        <ChatItem
          style={styles.item}
          message={info.item}
          onPress={onItemPress}
        />
        <Divider style={styles.dividerHeight} />
      </>
    );
  };

  return (
    <View>
      <CustomTopNavigation title="Mессеж" leftIcon={false} />
      <List style={styles.list} data={initialData} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 16,
  },
  dividerHeight: {
    height: 2,
  },
});

export default ChatScreen;
