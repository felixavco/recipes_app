import React from 'react';
import { screens, fonts } from '../config';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = ({ category, navigate }) => {
  const Touchable =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  const categoryContainer = {
    backgroundColor: category.color,
    ...styles.categoryContainer,
  };

  return (
    <View style={styles.categoryItem}>
      <Touchable
        style={{ flex: 1 }}
        onPress={() => navigate(screens.categoryMeal, { category })}
      >
        <View style={categoryContainer}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryContainer: {
    flex: 1,
    padding: 15,
    elevation: 3,
    borderRadius: 10,
    shadowRadius: 10,
    shadowOpacity: 0.26,
    shadowColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 20,
    textAlign: 'right',
    fontFamily: fonts.primaryBold,
  },
});

export default CategoryGridTile;
