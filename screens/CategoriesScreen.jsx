import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = () => {
  const { navigate } = useNavigation();

  const renderGridCategory = ({ item }) => {
    return <CategoryGridTile category={item} navigate={navigate} />;
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridCategory}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
