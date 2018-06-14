import PropTypes from 'prop-types';

const linkShape = PropTypes.shape({
  url: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
});

export default linkShape;
