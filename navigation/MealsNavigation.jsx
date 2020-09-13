import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';

import { colors, screens } from '../config';

const headerOptions = {
  headerStyle: {
    backgroundColor: colors.header,
    elevation: 4,
    shadowOpacity: 4,
  },
  headerTitleAlign: 'center',
  headerTintColor: colors.headerText,
};

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen
          name={screens.categories}
          component={CategoriesScreen}
          options={{ title: 'Categories' }}
        />
        <Stack.Screen
          name={screens.categoryMeal}
          component={CategoryMealScreen}
          options={({ route }) => ({ title: route.params.category.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
