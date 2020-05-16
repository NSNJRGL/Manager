import React from 'react';
import {StyleSheet, View} from 'react-native';
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
import ChatDetailScreen from '../screens/ChatDetailScreen';
import BannerScreen from '../screens/BannerScreen';
import BannerDetailScreen from '../screens/BannerDetailScreen';
import WorkDetailScreen from '../screens/WorkDetailScreen';
import LegalScreen from '../screens/LegalScreen';
import NotificationScreen from '../screens/NotificationScreen';

const noHeaderOptions = {
  headerMode: 'none',
  headerShown: false,
};

const WorkStackNavigator = createStackNavigator();

const WorkNavigator = () => {
  return (
    <WorkStackNavigator.Navigator headerMode="none">
      <WorkStackNavigator.Screen
        name="Work"
        component={WorkScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <WorkStackNavigator.Screen
        name="WorkDetail"
        component={WorkDetailScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <WorkStackNavigator.Screen
        name="ChatDetail"
        component={ChatDetailScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <WorkStackNavigator.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </WorkStackNavigator.Navigator>
  );
};

const ChatStackNavigator = createStackNavigator();

const ChatNavigator = () => {
  return (
    <ChatStackNavigator.Navigator headerMode="none">
      <ChatStackNavigator.Screen name="Chat" component={ChatScreen} />
      <ChatStackNavigator.Screen
        name="ChatDetail"
        component={ChatDetailScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </ChatStackNavigator.Navigator>
  );
};

const MapStackNavigator = createStackNavigator();

const MapNavigator = () => {
  return (
    <MapStackNavigator.Navigator headerMode="none">
      <MapStackNavigator.Screen name="Map" component={MapScreen} />
    </MapStackNavigator.Navigator>
  );
};

const OtherStackNavigator = createStackNavigator();

const OtherNavigator = () => {
  return (
    <OtherStackNavigator.Navigator headerMode="none">
      <OtherStackNavigator.Screen name="Other" component={OtherScreen} />
      <OtherStackNavigator.Screen
        name="Banner"
        component={BannerScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <OtherStackNavigator.Screen
        name="BannerDetail"
        component={BannerDetailScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <OtherStackNavigator.Screen
        name="Legal"
        component={LegalScreen}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </OtherStackNavigator.Navigator>
  );
};

const ResearchStackNavigator = createStackNavigator();

const ResearchNavigator = () => {
  return (
    <ResearchStackNavigator.Navigator mode="modal" headerMode="none">
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
        inactiveTintColor: UI.secondary,
        style: {...styles.tabBar},
        keyboardHidesTabBar: true,
        activeTabStyle: {
          backgroundColor: 'red',
        },
      }}
      initialRouteName="Work">
      <BottomTab.Screen
        name="Work"
        component={WorkNavigator}
        options={{
          tabBarLabel: 'Ажил',
          tabBarIcon: (tabInfo) => {
            return (
              <View>
                <View style={tabInfo.focused ? styles.activeTab : null} />
                <Icon
                  name="briefcase-outline"
                  style={{
                    height: UI.height,
                    width: UI.width,
                    tintColor: tabInfo.color,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapNavigator}
        options={{
          tabBarLabel: 'Байршил',
          tabBarIcon: (tabInfo) => {
            return (
              <View>
                <View style={tabInfo.focused ? styles.activeTab : null} />
                <Icon
                  name="navigation-outline"
                  style={{
                    height: UI.height,
                    width: UI.width,
                    tintColor: tabInfo.color,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Research"
        component={ResearchNavigator}
        options={{
          tabBarLabel: 'Судалгаа',
          tabBarIcon: (tabInfo) => {
            return (
              <View>
                <View style={tabInfo.focused ? styles.activeTab : null} />
                <Icon
                  name="plus-circle-outline"
                  style={{
                    height: UI.height,
                    width: UI.width,
                    tintColor: tabInfo.color,
                  }}
                />
              </View>
            );
          },
          tabBarVisible: false,
        }}
        listeners={({navigation, route}) => ({
          tabPress: (e) => {
            e.preventDefault();

            navigation.navigate('Research');
          },
        })}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarLabel: 'Mессеж',
          tabBarIcon: (tabInfo) => {
            return (
              <View>
                <View style={tabInfo.focused ? styles.activeTab : null} />
                <Icon
                  name="message-square-outline"
                  style={{
                    height: UI.height,
                    width: UI.width,
                    tintColor: tabInfo.color,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Other"
        component={OtherNavigator}
        options={{
          tabBarLabel: 'Бусад',
          tabBarIcon: (tabInfo) => {
            return (
              <View>
                <View style={tabInfo.focused ? styles.activeTab : null} />
                <Icon
                  name="archive-outline"
                  style={{
                    height: UI.height,
                    width: UI.width,
                    tintColor: tabInfo.color,
                  }}
                />
              </View>
            );
          },
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

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
  },
  activeTab: {
    borderTopColor: '#FA434A',
    borderTopWidth: 1,
    bottom: 5,
  },
});

export default AppNavigator;
