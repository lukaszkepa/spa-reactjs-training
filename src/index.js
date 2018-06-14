/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { parkingApp } from './reducers';

import Parking from './parking/parking.component';

const store = createStore(parkingApp);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Parking />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-app'));
