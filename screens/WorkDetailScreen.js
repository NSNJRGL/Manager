import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

import CustomTopNavigation from '../components/CustomTopNavigation';

const WorkDetailScreen = (props) => {
  return (
    <React.Fragment>
      <CustomTopNavigation
        title={props.route.params && props.route.params.title}
        leftIcon={true}
      />
      <Layout style={styles.header} level="1">
        <Text style={styles.titleLabel} category="h4">
          Hello
        </Text>
        <Text style={styles.descriptionLabel} category="s1">
          Hellooo
        </Text>
        <ImageBackground
          style={styles.image}
          source={require('../assets/images/banner.jpg')}
        />
        <Text style={styles.contentLabel}>Helloooo</Text>
        <View style={styles.authoringContainer}>
          <Text appearance="hint" category="p2">
            Hello
          </Text>
          <Text style={styles.dateLabel} appearance="hint" category="p2">
            sda
          </Text>
        </View>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingBottom: 8,
  },
  list: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  image: {
    height: 240,
  },
  titleLabel: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  descriptionLabel: {
    margin: 24,
  },
  contentLabel: {
    margin: 24,
  },
  authoringContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  dateLabel: {
    marginHorizontal: 8,
  },
});

export default WorkDetailScreen;
