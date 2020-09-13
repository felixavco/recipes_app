import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const CategoryMealScreen = () => {
  const { navigate } = useNavigation();
  const {
    params: { category },
  } = useRoute();

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(category.id);
  });

  const renderMealItem = ({ item }) => {
    return <MealItem meal={item} navigate={navigate} />
  }

  return (
    <View>
     <FlatList 
      data={displayedMeals}
      renderItem={renderMealItem}
    />
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({});
