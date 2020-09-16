import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
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
        <Stack.Screen
          name={screens.mealDetails}
          component={MealDetailsScreen}
          options={({ route }) => ({
            title: route.params.meal.title,
            ...mealDetailsHButton(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
