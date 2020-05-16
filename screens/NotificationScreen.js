import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Divider} from '@ui-kitten/components';
import NotificationItem from '../components/NotificationItem';

import CustomTopNavigation from '../components/CustomTopNavigation';

const initialData = new Array(1).fill({
  text: 'Tанд чат ирсэн байна',
  date: '16:30',
  isRead: true,
  fullName: 'Сүүлийн тайлангаа явуулна уу!',
  notif_type: 'CHAT',
  notif_id: 1,
});

const NotificationScreen = ({navigation}) => {
  const handleNotification = (notification) => {
    if (notification.notif_type === 'CHAT') {
      navigation.navigate('ChatDetail', {
        notificationId: notification.notif_id,
        title: 'Б.Бат',
      });
    }
  };

  const renderItem = (info) => {
    return (
      <>
        <NotificationItem
          style={styles.item}
          message={info.item}
          onPressNotification={() => handleNotification(info.item)}
        />
        <Divider style={styles.dividerHeight} />
      </>
    );
  };

  return (
    <View>
      <CustomTopNavigation
        title="Mэдэгдэл"
        leftIcon={true}
        navigation={navigation}
      />
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

export default NotificationScreen;
