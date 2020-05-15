import React from 'react';
import {StyleSheet} from 'react-native';
import {
  TopNavigation,
  Text,
  Icon,
  TopNavigationAction,
} from '@ui-kitten/components';

const BackIcon = () => <Icon fill="#FA434A" name="close-circle-outline" />;

const CustomTopNavigation = (props) => {
  const renderTitle = () => (
    <Text style={styles.text} category="h5">
      {props.title}
    </Text>
  );

  const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

  return (
    <TopNavigation
      alignment="center"
      // accessoryLeft={renderBackAction}
      title={renderTitle}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222C44',
  },
});

export default CustomTopNavigation;
