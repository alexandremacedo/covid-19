import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from './store';

import Routes from '~/routes/routes';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#222c45" />
    <Routes />
  </Provider>
);

export default App;
