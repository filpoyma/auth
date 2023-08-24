import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import MainRoute from './navigate/MainRoute';
import './navigate/mainRoute.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
