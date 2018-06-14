import React from 'react';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

class Places extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [
        { id: 1, name: 'Place #1', occupied: false },
        { id: 2, name: 'Place #2', occupied: true },
        { id: 3, name: 'Place #3', occupied: false },
        { id: 4, name: 'Place #4', occupied: false },
        { id: 5, name: 'Place #5', occupied: true },
      ],
    };
  }

  getPlaces = () => this.state.places.map(place => (
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

export default Places;
