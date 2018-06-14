import PropTypes from 'prop-types';

export const actionTypes = {
  PARKING_GET_PLACES: 'PARKING_GET_PLACES',
  PARKING_EDIT_PLACE: 'PARKING_EDIT_PLACE',
};

export const placeShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  occupied: PropTypes.bool,
});
