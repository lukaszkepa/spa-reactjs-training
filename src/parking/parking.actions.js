import { actionTypes } from './parking.constants';

export const getPlaces = () => ({
  type: actionTypes.PARKING_GET_PLACES,
  data: [],
});

export const editPlace = place => ({
  type: actionTypes.PARKING_EDIT_PLACE,
  data: place,
});
