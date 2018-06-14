import { actionTypes } from './parking.constants';

const initialState = {
  places: [
    { id: 1, name: 'Place #1', occupied: false },
    { id: 2, name: 'Place #2', occupied: true },
    { id: 3, name: 'Place #3', occupied: false },
    { id: 4, name: 'Place #4', occupied: false },
    { id: 5, name: 'Place #5', occupied: true },
  ],
};

export default function parkingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PARKING_GET_PLACES: {
      if (action.data.length > 0) {
        const newState = { places: [...action.data] };
        return { ...state, ...newState };
      }
      return state;
    }
    case actionTypes.PARKING_EDIT_PLACE: {
      const place = action.data;
      const placeIndex = state.places.findIndex(p => p.id === place.id);
      if (placeIndex === -1) {
        return state;
      }
      const newPlaces = state.places;
      newPlaces[placeIndex] = place;
      const newState = { places: [...newPlaces] };
      return { ...state, ...newState };
    }
    default:
      return state;
  }
}
