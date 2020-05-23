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
    <View style={styles.iconRight}>
      <Icon {...style} name="chevron-right-outline" fill="#FA434A" />
    </View>
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
            style={styles.listItem}
            title={`${item.title}`}
            description={renderDescription(item)}
            accessoryRight={renderItemAccessory}
            disabled={true}
          />
          <View style={styles.person}>
            <Avatar
              size="small"
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/election-manager-277213.appspot.com/o/assets%2Fuser-profile.jpg?alt=media&token=ee404eb3-6ea0-4f0e-bb79-5e23f22b5894',
              }}
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
    marginTop: 7,
    marginLeft: 7,
  },
  iconRight: {
    paddingTop: 25,
  },
  listItem: {
    paddingTop: 0,
  },
});

export default WorkList;
