import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { colors, fonts, screens } from '../config';

const MealItem = ({ meal, navigate }) => {
  const { title, imageUrl, duration, complexity, affordability } = meal;
  const row = (stys) => ({
    ...styles.row,
    ...stys,
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => navigate(screens.mealDetails, { meal })}
        >
          <ImageBackground
            style={styles.backgroundImg}
            source={{ uri: imageUrl }}
            imageStyle={{ opacity: 0.85 }}
          >
            <View style={row(styles.header)}>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            </View>
            <View style={row(styles.details)}>
              <Text style={styles.detailText}>{duration}m</Text>
              <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
              <Text style={styles.detailText}>
                {affordability.toUpperCase()}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    height: 200,
    width: '95%',
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 10,
    overflow: 'hidden',
    textShadowRadius: 10,
  },

  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 20,
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 7,
    textAlign: 'center',
  },

  row: {
    flexDirection: 'row',
  },

  header: {
    height: '89%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  details: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    backgroundColor: `rgba(0,0,0, 0.5)`,
    color: colors.white,
    height: '100%',
  },

  backgroundImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  detailText: {
    fontFamily: fonts.primary,
    color: colors.white,
    fontSize: 15,
  },
});
