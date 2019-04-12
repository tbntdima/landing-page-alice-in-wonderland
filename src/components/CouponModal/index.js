import React from 'react';
import { Modal } from 'react-bootstrap';

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} size="lg" centered>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
