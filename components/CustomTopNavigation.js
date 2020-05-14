import React from 'react';
import {StyleSheet} from 'react-native';
import {TopNavigation, Text} from '@ui-kitten/components';

const CustomTopNavigation = (props) => {
  const renderTitle = () => (
    <Text style={styles.text} category="h5">
      {props.title}
    </Text>
  );

  return <TopNavigation alignment="center" title={renderTitle} />;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222C44',
  },
});

export default CustomTopNavigation;
