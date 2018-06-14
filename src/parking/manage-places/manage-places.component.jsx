import React from 'react';
import {
  PageHeader,
  ListGroup, ListGroupItem,
} from 'react-bootstrap';

import EditPlaceModal from './edit-modal/edit-modal.component';

class ManagePlaces extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      places: [
        { id: 1, name: 'Place #1', occupied: false },
        { id: 2, name: 'Place #2', occupied: true },
        { id: 3, name: 'Place #3', occupied: false },
        { id: 4, name: 'Place #4', occupied: false },
        { id: 5, name: 'Place #5', occupied: true },
      ],
      selectedPlace: {},
    };
  }

  getPlaces = () => this.state.places.map(place => (
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
    const placeIndex = this.state.places.findIndex(p => p.id === place.id);
    if (placeIndex === -1) {
      return;
    }
    const newPlaces = this.state.places;
    newPlaces[placeIndex] = place;
    this.setState({
      places: [...newPlaces],
    });
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

export default ManagePlaces;
