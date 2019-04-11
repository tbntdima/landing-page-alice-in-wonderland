import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import {
  BackgroundSlider,
  BackgroundFilter
} from '../../components/Backgrounds/';
import frontImage from '../../images/backgrounds/front.jpg';
import backImage from '../../images/backgrounds/back.png';
import './index.scss';

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Homepage extends Component {
  state = {
    modalShow: false
  };

  modalShow = () => this.setState({ modalShow: true });
  modalClose = () => this.setState({ modalShow: false });

  render() {
    return (
      <div className="homepage">
        <Container className="homepage__content">
          <Row>
            <Col>
              <Button onClick={this.modalShow}>Launch modal</Button>
            </Col>
          </Row>
        </Container>

        {/* Backgrounds */}
        <BackgroundSlider
          image={frontImage}
          imageHeight={631}
          animationDirection="top"
          animationDuration={0}
          zIndex={-1}
        />
        <BackgroundFilter
          opacity={0.65}
          colors={['purple', 'green', 'blue', 'orange']}
          animationDuration={0}
          zIndex={-2}
        />
        <BackgroundSlider
          image={backImage}
          imageHeight={1638}
          animationDirection="top"
          animationDuration={0}
          zIndex={-3}
          backgroundColor=""
        />

        {/* Modals */}
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={this.modalClose}
        />
      </div>
    );
  }
}

export default Homepage;
