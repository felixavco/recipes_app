import React from 'react';
import { useFonts } from 'expo-font';
import { fonts, colors } from './config';
import MealsNavigator from './MealsNavigator';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

const fontsObj = {
  [fonts.primary]: require('./assets/fonts/OpenSans-Regular.ttf'),
  [fonts.primaryBold]: require('./assets/fonts/OpenSans-Bold.ttf'),
};

const App = () => {
  const [loaded] = useFonts(fontsObj);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <View>
          <ActivityIndicator size='large' color={colors.primary} />
          <Text style={styles.title}>Recipes App</Text>
        </View>
      </View>
    );
  }

  return <MealsNavigator />;
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginTop: 16,
  },
});
