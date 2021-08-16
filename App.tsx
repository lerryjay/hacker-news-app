
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import  store from './src/redux/store'
import View from './src/View';

export default function App() {
  
  return (
    <Provider store={store}>
     <View />
    </Provider>
  );
}
