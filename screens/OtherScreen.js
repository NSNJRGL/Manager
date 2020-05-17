import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {List, ListItem, Icon} from '@ui-kitten/components';

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
    title: 'Сонгуулийн тухай',
    nav: 'AboutLegalScreen',
    icon: 'battery-outline',
  },
  {
    title: 'Улсын их хурлын сонгуулийн тухай хууль',
    nav: 'NationLegalScreen',
    icon: 'browser-outline',
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

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={renderTitle(item)}
        accessoryLeft={(props) => renderItemIcon(props, item.icon)}
        accessoryRight={renderItemAccessory}
        style={styles.listItem}
        onPress={() => navigation.navigate(item.nav)}
      />
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
