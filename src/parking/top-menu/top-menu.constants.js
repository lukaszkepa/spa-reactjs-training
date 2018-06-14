import PropTypes from 'prop-types';

const linkShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  badge: PropTypes.number,
});

export default linkShape;
