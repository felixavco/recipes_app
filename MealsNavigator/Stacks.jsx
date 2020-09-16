import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';

import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HeaderButton from '../components/HeaderButton';

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

const mealDetailsHButton = ({ params }) => ({
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Favorite"
        iconName="ios-heart"
        onPress={() => console.log('AddedToFAvorite', params.meal.title)}
      />
    </HeaderButtons>
  ),
});

export const Meals = () => (
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
    <Stack.Screen
      name={screens.mealDetails}
      component={MealDetailsScreen}
      options={({ route }) => ({
        title: route.params.meal.title,
        ...mealDetailsHButton(route),
      })}
    />
  </Stack.Navigator>
);

export const Favorites = () => (
  <Stack.Navigator screenOptions={headerOptions}>
    <Stack.Screen
      name={screens.favorites}
      component={FavoritesScreen}
      options={{ title: 'Favorites' }}
    />
  </Stack.Navigator>
);
