import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

import * as actions from '../parking.actions';
import { placeShape } from '../parking.constants';

class Places extends React.Component {
  componentDidMount() {
    this.props.actions.getPlaces();
  }

  getPlaces = () => this.props.data.map(place => (
    <ListGroupItem
      key={place.id}
      bsStyle={place.occupied ? 'danger' : 'success'}
    >
      {place.name}
    </ListGroupItem>),
  );

  render() {
    return (
      <React.Fragment>
        <PageHeader>
          This is your parking places..
        </PageHeader>
        <ListGroup>
          {this.getPlaces()}
        </ListGroup>
      </React.Fragment>
    );
  }
}

Places.propTypes = {
  actions: PropTypes.shape({
    getPlaces: PropTypes.func.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(placeShape).isRequired,
};

const mapStateToProps = state => ({
  data: state.parking.places,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Places);
