/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Parking from './parking/parking.component';

ReactDOM.render(
  <BrowserRouter>
    <Parking />
  </BrowserRouter>,
  document.getElementById('react-app'));
