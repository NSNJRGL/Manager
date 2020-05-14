import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ui-kitten/components';

import UI from '../constants/UI';

import LoginScreen from '../screens/LoginScreen';
import WorkScreen from '../screens/WorkScreen';
import ChatScreen from '../screens/ChatScreen';
import MapScreen from '../screens/MapScreen';
import OtherScreen from '../screens/OtherScreen';
import ResearchScreen from '../screens/ResearchScreen';

const noHeaderOptions = {
  headerMode: 'none',
  headerShown: false,
};

const WorkStackNavigator = createStackNavigator();

const WorkNavigator = () => {
  return (
    <WorkStackNavigator.Navigator>
      <WorkStackNavigator.Screen name="Work" component={WorkScreen} />
    </WorkStackNavigator.Navigator>
  );
};

const ChatStackNavigator = createStackNavigator();

const ChatNavigator = () => {
  return (
    <ChatStackNavigator.Navigator>
      <ChatStackNavigator.Screen name="Chat" component={ChatScreen} />
    </ChatStackNavigator.Navigator>
  );
};

const MapStackNavigator = createStackNavigator();

const MapNavigator = () => {
  return (
    <MapStackNavigator.Navigator>
      <MapStackNavigator.Screen name="Map" component={MapScreen} />
    </MapStackNavigator.Navigator>
  );
};

const OtherStackNavigator = createStackNavigator();

const OtherNavigator = () => {
  return (
    <OtherStackNavigator.Navigator>
      <OtherStackNavigator.Screen name="Other" component={OtherScreen} />
    </OtherStackNavigator.Navigator>
  );
};

const ResearchStackNavigator = createStackNavigator();

const ResearchNavigator = () => {
  return (
    <ResearchStackNavigator.Navigator>
      <ResearchStackNavigator.Screen
        name="Research"
        component={ResearchScreen}
      />
    </ResearchStackNavigator.Navigator>
  );
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

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
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
              name={'briefcase-outline'}
              style={{height: UI.spacing, tintColor: tabInfo.color}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Icon
              name="navigation-outline"
              style={{height: UI.spacing, tintColor: tabInfo.color}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Research"
        component={ResearchNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Icon
              name="plus-circle-outline"
              style={{height: UI.spacing, tintColor: tabInfo.color}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Icon
              name="message-square-outline"
              style={{height: UI.spacing, tintColor: tabInfo.color}}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Other"
        component={OtherNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Icon
              name="archive-outline"
              style={{height: UI.spacing, tintColor: tabInfo.color}}
            />
          ),
        }}
      />
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
