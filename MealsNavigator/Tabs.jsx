import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { Meals, Favorites } from './Stacks';
import { colors, screens } from '../config';

const Tab = createBottomTabNavigator();
const iconSize = 23;

const tabBarOptions = {
  activeTintColor: colors.primary,
  inactiveTintColor: colors.gray400,
};

const screenOptions = ({ route }) => ({
  tabBarLabel: ({ color }) => (
    <View>
      <Text style={{ color, fontSize: 12 }}>{route.name}</Text>
    </View>
  ),
  tabBarIcon: ({ color }) => (
    <MaterialIcons
      name={route.name === screens.mealsTab ? 'restaurant' : 'favorite-border'}
      size={iconSize}
      color={color}
    />
  ),
});

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <Tab.Screen name={screens.mealsTab} component={Meals} />
        <Tab.Screen name={screens.favoritesTab} component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
