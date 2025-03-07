import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Layout, Text, Divider} from '@ui-kitten/components';

import WorkHeader from '../components/WorkHeader';
import TopCalendar from '../components/TopCalendar';
import WorkList from '../components/WorkList';

const WorkScreen = ({navigation}) => {
  return (
    <Layout style={styles.container}>
      <WorkHeader navigation={navigation} />
      <TopCalendar />
      <Divider style={styles.dividerHeight} />
      <Layout style={styles.body}>
        <Text category="h6" style={styles.title}>
          Өнөөдрийн гүйцэтгэх даалгаврууд
        </Text>
        <WorkList
          maxHeight={Dimensions.get('window').height + 5}
          navigation={navigation}
          detailType="WorkDetail"
        />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dividerHeight: {
    height: 2,
  },
  body: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  title: {
    color: '#C1CBDD',
    fontSize: 18,
  },
});

export default WorkScreen;
