import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import MainLayoutPage from './src/screens/MainLayoutPage';

const App = () => {
  
  return (
    <Provider store={store}>
      <MainLayoutPage />
    </Provider>
  );
};

export default App
