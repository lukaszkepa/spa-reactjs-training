/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Badge } from 'react-bootstrap';

import NavLinkItem from './nav-link-item.component';
import linkShape from './top-menu.constants';

class TopMenu extends React.Component {
  getLinks = () =>
    this.props.links.map((link, index) => (
      <NavLinkItem
        key={link.url}
        to={link.url}
        eventKey={index}
      >
        <span>{link.label} <Badge>{link.badge}</Badge></span>
      </NavLinkItem>
    ));

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Parking</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {this.getLinks()}
        </Nav>
      </Navbar>
    );
  }
}

TopMenu.propTypes = {
  links: PropTypes.arrayOf(linkShape.isRequired).isRequired,
};

export default TopMenu;
