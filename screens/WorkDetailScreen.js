import React from 'react';
import {StyleSheet, View, ScrollView, Linking} from 'react-native';
import {
  Text,
  Avatar,
  Layout,
  Icon,
  Button,
  Divider,
} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';

const PhoneIcon = (props) => <Icon {...props} name="phone-call-outline" />;
const MessageCircleIcon = (props) => (
  <Icon {...props} name="message-circle-outline" />
);

const WorkDetailScreen = (props) => {
  const onCallButton = () => {
    Linking.openURL(`tel:${99824718}`);
  };

  const onMessageButtonPress = () => {
    props.navigation &&
      props.navigation.navigate('ChatDetail', {title: 'B.Nasanjargal'});
  };

  return (
    <React.Fragment>
      <CustomTopNavigation
        title={props.route.params && props.route.params.title}
        leftIcon={true}
        navigation={props.navigation}
      />
      <ScrollView style={styles.container}>
        <Layout style={styles.header}>
          <Avatar
            style={styles.profileAvatar}
            source={require('../assets/images/user-profile.jpg')}
          />
          <Text style={styles.profileName} category="h5">
            Шадар туслах Б.Бат
          </Text>
          <View style={styles.profileButtonsContainer}>
            <Button
              style={styles.profileButton}
              size="small"
              accessoryLeft={PhoneIcon}
              appearance="outline"
              onPress={onCallButton}>
              ЗАЛГАХ
            </Button>
            <Button
              style={styles.profileButton}
              size="small"
              appearance="outline"
              accessoryLeft={MessageCircleIcon}
              onPress={onMessageButtonPress}>
              ЧАTЛАХ
            </Button>
          </View>
        </Layout>
        <Divider style={styles.dividerHeight} />
        <View style={styles.spacing} />
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.titleHeader}>
              <Text style={styles.text} category="h6">
                Ажлын нэр
              </Text>
            </View>
            <Text style={styles.textDescription} category="p1">
              Сонгуулийн хуудас тараах 50ш
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.titleHeader}>
              <Text style={styles.text} category="h6">
                Ажлын дэлгэрэнгүй
              </Text>
            </View>
            <Text style={styles.textDescription} category="p1">
              Сонгуулийн төв байгууллагын тухай хуульд ерөнхий хорооны гишүүн нь
              Монгол Улсын Үндсэн хуульд тангараг өргөнө
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.titleHeader}>
              <Text style={styles.text} category="h6">
                Хугацаа
              </Text>
            </View>
            <Text style={styles.textDescription} category="p1">
              06 сарын 15
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.titleHeader}>
              <Text style={styles.text} category="h6">
                Tөсөв
              </Text>
            </View>
            <Text style={styles.textDescription} category="p1">
              100 000 мянган төгрөг дотор багтаах
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Button>АЖИЛ ДУУССАН</Button>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 8,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  profileAvatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    marginBottom: 15,
  },
  profileName: {
    zIndex: 1,
    fontWeight: 'bold',
  },
  profileButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  profileButton: {
    marginHorizontal: 4,
  },
  dividerHeight: {
    height: 2,
  },
  spacing: {
    paddingTop: 30,
  },
  contentContainer: {
    paddingHorizontal: 40,
  },
  titleHeader: {
    borderLeftColor: '#FA434A',
    borderLeftWidth: 1,
  },
  text: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  textDescription: {
    padding: 20,
  },
  innerContainer: {
    flex: 1,
  },
});

export default WorkDetailScreen;
