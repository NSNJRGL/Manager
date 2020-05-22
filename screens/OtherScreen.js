import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Text, List, ListItem, Icon} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';

import CustomTopNavigation from '../components/CustomTopNavigation';

const data = [
  {
    title: 'Зарлалын самбар',
    nav: 'Banner',
    icon: 'clipboard-outline',
  },
  {
    title: 'Үндсэн хууль',
    nav: 'Legal',
    icon: 'book-outline',
  },
  {
    title: 'Сонгуулийн тухай хууль',
    nav: 'AboutLegal',
    icon: 'attach-outline',
  },
  {
    title: 'Улсын их хурлын сонгуулийн тухай хууль',
    nav: 'NationLegal',
    icon: 'browser-outline',
  },
  {
    title: 'Видео',
    nav: 'VideoAboutLegal',
    icon: 'browser-outline',
  },
  {
    title: 'Mөрийн хөтөлбөр',
    nav: 'Campaign',
    icon: 'list-outline',
  },
  {
    title: 'Гарах',
    icon: 'power-outline',
  },
];

const OtherScreen = ({navigation}) => {
  const renderItemAccessory = (props) => (
    <Icon {...props} name="chevron-right-outline" fill="#222C44" />
  );

  const renderItemIcon = (props, icon) => (
    <Icon {...props} name={icon} fill="#222C44" />
  );

  const renderTitle = (item) => (
    <Text style={styles.title} category="label">
      {item.title}
    </Text>
  );

  const checkNavigation = (item) => {
    if (item.nav) {
      navigation.navigate(item.nav);
    } else {
      handleSignout();
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={renderTitle(item)}
        accessoryLeft={(props) => renderItemIcon(props, item.icon)}
        accessoryRight={renderItemAccessory}
        style={styles.listItem}
        onPress={() => checkNavigation(item)}
      />
    );
  };

  const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };

  const handleSignout = () => {
    Alert.alert(
      'Election Manager',
      'Системээс гарахдаа итгэлтэй байна уу?',
      [
        {
          text: 'Хаах',
          style: 'cancel',
        },
        {
          text: 'Гарах',
          onPress: () => {
            removeItem('token');
            navigation.navigate('Login');
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <React.Fragment>
      <CustomTopNavigation title="Бусад" leftIcon={false} />
      <List style={styles.container} data={data} renderItem={renderItem} />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    backgroundColor: '#F7F9FC',
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OtherScreen;
