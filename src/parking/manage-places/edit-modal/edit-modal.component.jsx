import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button,
  FormGroup, ControlLabel, FormControl, Checkbox,
} from 'react-bootstrap';
import { placeShape } from '../../parking.constants';

class EditPlaceModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.place };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleOccupationChange = (event) => {
    this.setState({ occupied: event.target.checked });
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onClose}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Edit place
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup>
            <ControlLabel>Place name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              placeholder="Enter place name"
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Checkbox
              inline
              checked={this.state.occupied}
              onChange={this.handleOccupationChange}
            >
              Occupied
            </Checkbox>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.onSave(this.state)}>Save</Button>
          <Button onClick={this.props.onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

EditPlaceModal.propTypes = {
  place: placeShape.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditPlaceModal;
