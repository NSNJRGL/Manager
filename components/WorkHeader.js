import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {
  TopNavigation,
  Avatar,
  Text,
  Icon,
  TopNavigationAction,
} from '@ui-kitten/components';
import moment from 'moment';

const NotificationIcon = (props) => <Icon {...props} name="bell-outline" />;

const WorkHeader = ({navigation}) => {
  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={{
          uri:
            'https://firebasestorage.googleapis.com/v0/b/election-manager-277213.appspot.com/o/assets%2Fuser-profile.jpg?alt=media&token=ee404eb3-6ea0-4f0e-bb79-5e23f22b5894',
        }}
      />
      <Text style={styles.text} category="h5">
        {moment().month() + 1} сар
      </Text>
    </View>
  );

  const toggleMenu = () => {
    navigation.navigate('Notification');
  };

  const renderNotificationAction = () => (
    <TopNavigationAction icon={NotificationIcon} onPress={toggleMenu} />
  );

  return (
    <SafeAreaView>
      <TopNavigation
        title={renderTitle}
        accessoryRight={renderNotificationAction}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default WorkHeader;
