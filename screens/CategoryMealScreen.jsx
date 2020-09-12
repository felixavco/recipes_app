import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CategoryMealScreen = () => {
  const { params } = useRoute();

  return (
    <View>
      <Text>{params.category.title}</Text>
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({});
