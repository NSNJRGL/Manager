import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {
  TopNavigation,
  Avatar,
  Text,
  OverflowMenu,
  Icon,
  TopNavigationAction,
  MenuItem,
} from '@ui-kitten/components';

const MenuIcon = (props) => <Icon {...props} name="bell-outline" />;

const InfoIcon = (props) => <Icon {...props} name="info" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

const WorkHeader = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Avatar
        style={styles.logo}
        source={require('../assets/images/user-profile.jpg')}
      />
      <Text style={styles.text} category="h5">
        6 сар
      </Text>
    </View>
  );

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <SafeAreaView>
      <TopNavigation
        title={renderTitle}
        accessoryRight={renderOverflowMenuAction}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 15,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default WorkHeader;
