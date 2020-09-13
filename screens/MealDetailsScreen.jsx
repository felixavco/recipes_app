import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MealDetailsScreen = () => {
  const { params } = useRoute();
  const { title } = params.meal;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
