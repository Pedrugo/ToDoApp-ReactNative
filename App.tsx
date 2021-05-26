// import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/navigation/Tab';

const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
};