import PropTypes from 'prop-types';

const linkShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export default linkShape;
