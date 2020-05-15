import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, List, ListItem, Text, Avatar} from '@ui-kitten/components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const data = new Array(10).fill({
  title: 'Сонгуулийн хуудас тараах 50ш',
  description: 'энд дарж ажлын дэлгэрэнгүйтэй танилцана уу!',
});

const WorkList = ({maxHeight, navigation, detailType}) => {
  const renderItemAccessory = (style) => (
    <Icon
      style={styles.rightIcon}
      {...style}
      name="chevron-right-outline"
      fill="#FA434A"
    />
  );

  const renderDescription = (item) => (
    <Text style={styles.description} appearance="hint">
      {item.description}
    </Text>
  );

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.list}>
        <TouchableOpacity
          onPress={() => navigation.navigate(detailType, {title: item.title})}>
          <ListItem
            title={`${item.title}`}
            description={renderDescription(item)}
            accessoryRight={renderItemAccessory}
            disabled={true}
          />
          <View style={styles.person}>
            <Avatar
              size="small"
              source={require('../assets/images/user-profile.jpg')}
            />
            <Text style={styles.topMargin} category="label">
              үүрэг даалгавар өгсөн шадар туслах Б.Бат
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <List
        style={{...styles.listContainer, maxHeight}}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
  },
  list: {
    borderLeftWidth: 1,
    borderColor: '#FA434A',
    marginBottom: 20,
  },
  description: {
    fontStyle: 'italic',
  },
  person: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  topMargin: {
    marginTop: 5,
    marginLeft: 5,
  },
  rightIcon: {
    paddingTop: '10',
  },
});

export default WorkList;
