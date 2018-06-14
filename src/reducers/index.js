import { combineReducers } from 'redux';
import parking from '../parking/parking.reducer';

export const parkingApp = combineReducers({
  parking,
});
