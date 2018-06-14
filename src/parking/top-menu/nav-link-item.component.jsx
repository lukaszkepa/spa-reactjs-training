import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

class NavLinkItem extends React.Component {
  goTo = (event) => {
    event.preventDefault();
    this.props.history.push(this.props.to);
  };

  render() {
    return (
      <NavItem
        eventKey={this.props.eventKey}
        href={this.props.to}
        onClick={this.goTo}
      >
        {this.props.children}
      </NavItem>
    );
  }
}

NavLinkItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  to: PropTypes.string.isRequired,
  eventKey: PropTypes.number.isRequired,
};

NavLinkItem.defaultProps = {
  children: null,
};

export default withRouter(NavLinkItem);
