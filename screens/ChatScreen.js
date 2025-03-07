import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Divider} from '@ui-kitten/components';
import ChatItem from '../components/ChatItem';

import CustomTopNavigation from '../components/CustomTopNavigation';
import {UserContext} from '../context/UserContext';

const initialData = new Array(1).fill({
  text: 'Tань руу тайлангаа явууллаа.',
  date: '16:30',
  isRead: true,
  fullName: 'Б.Бат',
});

const ChatScreen = ({navigation}) => {
  const currentUser = useContext(UserContext);

  const onItemPress = () =>
    navigation &&
    navigation.navigate('ChatDetail', {
      title: 'Б.Бат',
      name: 'nasaa',
      email: 'nasaa@test.com',
      current_user_id: '2',
      receiver_id: '1',
    });

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
