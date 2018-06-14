import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  PageHeader,
  ListGroup, ListGroupItem,
} from 'react-bootstrap';

import * as actions from '../parking.actions';
import { placeShape } from '../parking.constants';
import EditPlaceModal from './edit-modal/edit-modal.component';

class ManagePlaces extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      selectedPlace: {},
    };
  }

  componentDidMount() {
    this.props.actions.getPlaces();
  }

  getPlaces = () => this.props.data.map(place => (
    <ListGroupItem
      key={place.id}
      bsStyle={place.occupied ? 'danger' : 'success'}
      onClick={() => this.showEditPlaceModal(place)}
    >
      {place.name}
    </ListGroupItem>),
  );

  showEditPlaceModal = (place) => {
    this.setState({
      edit: true,
      selectedPlace: place,
    });
  }

  closeEditPlaceModal = () => {
    this.setState({
      edit: false,
      selectedPlace: {},
    });
  }

  saveEditPlaceModal = (place) => {
    this.props.actions.editPlace(place);
    this.closeEditPlaceModal();
  }

  render() {
    return (
      <React.Fragment>
        <PageHeader>
          Here you can manage parking places..
        </PageHeader>
        <ListGroup>
          {this.getPlaces()}
        </ListGroup>
        <EditPlaceModal
          key={this.state.selectedPlace.id}
          show={this.state.edit}
          onClose={this.closeEditPlaceModal}
          onSave={this.saveEditPlaceModal}
          place={this.state.selectedPlace}
        />
      </React.Fragment>
    );
  }
}

ManagePlaces.propTypes = {
  actions: PropTypes.shape({
    getPlaces: PropTypes.func.isRequired,
    editPlace: PropTypes.func.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(placeShape).isRequired,
};

const mapStateToProps = state => ({
  data: state.parking.places,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManagePlaces);
