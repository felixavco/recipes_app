import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigation';

const fetchFotns = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [loaded, setLoaded] = useState();

  if (!loaded) {
    return (
      <AppLoading startAsync={fetchFotns} onFinish={() => setLoaded(true)} />
    );
  }

  return <MealsNavigator />;
};
