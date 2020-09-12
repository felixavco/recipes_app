import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../config';

const CategoriesScreen = () => {
  const { navigate } = useNavigation();

  const renderGridCategory = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => navigate(screens.categoryMeal, { category: item })}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
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

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
