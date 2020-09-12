import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';

import { colors, screens } from '../config';

const { Navigator, Screen } = createStackNavigator();
const headerOptions = {
  headerStyle: {
    backgroundColor: colors.header,
    elevation: 4,
    shadowOpacity: 4,
  },
  headerTitleAlign: 'center',
  headerTintColor: colors.headerText,
};

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name={screens.categories}
          component={CategoriesScreen}
          options={{ title: 'Categories', ...headerOptions }}
        />
        <Screen
          name={screens.categoryMeal}
          component={CategoryMealScreen}
          options={({ route }) => ({
            title: route.params.category.title,
            ...headerOptions,
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
