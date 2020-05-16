import React from 'react';
import {StyleSheet} from 'react-native';
import {
  TopNavigation,
  Text,
  Icon,
  TopNavigationAction,
  Layout,
} from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon width={35} height={35} {...props} name="chevron-left-outline" />
);

const CustomTopNavigation = (props) => {
  const renderTitle = () => (
    <Text style={styles.text} category="h5">
      {props.title}
    </Text>
  );

  const handleLeftMenu = (navigateBack) => {
    props.handleModalBackButton && props.handleModalBackButton(false);
    if (!navigateBack) {
      props.navigation.goBack();
    }
  };

  const renderBackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => handleLeftMenu(props.setBack)}
    />
  );

  return (
    <Layout style={styles.container} level="1">
      <TopNavigation
        alignment="center"
        accessoryLeft={props.leftIcon ? renderBackAction : null}
        title={renderTitle}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 50,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222C44',
  },
});

export default CustomTopNavigation;
