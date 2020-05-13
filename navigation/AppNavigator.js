import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ui-kitten/components';

import UI from '../constants/UI';

import LoginScreen from '../screens/LoginScreen';
import WorkScreen from '../screens/WorkScreen';

const noHeaderOptions = {
  headerMode: 'none',
  headerShown: false,
};

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={noHeaderOptions}>
      <AuthStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </AuthStackNavigator.Navigator>
  );
};

const WorkStackNavigator = createStackNavigator();

const WorkNavigator = () => {
  return (
    <WorkStackNavigator.Navigator>
      <WorkStackNavigator.Screen name="WorkScreen" component={WorkScreen} />
    </WorkStackNavigator.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: UI.primary,
        inactiveTintColor: UI.gray,
      }}
      initialRouteName="Work">
      <BottomTab.Screen
        name="Work"
        component={WorkNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Icon
              name="home-outline"
              style={{height: UI.spacing, tintColor: tabInfo.color}}
            />
          ),
        }}
      />
      )}
    </BottomTab.Navigator>
  );
};

const Root = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="Auth" screenOptions={noHeaderOptions}>
        <Root.Screen name="Auth" component={AuthNavigator} />
        <Root.Screen name="App" component={BottomTabNavigator} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
