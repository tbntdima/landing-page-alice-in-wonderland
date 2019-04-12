import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Character from '../../components/Character';
import {
  BackgroundSlider,
  BackgroundFilter
} from '../../components/Backgrounds/';
import CouponModal from '../../components/CouponModal';
import backgroundImage from '../../images/backgrounds/backgroundImage.jpg';
import './index.scss';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  // random positive or negative
  const result = Math.random() < 0.5 ? -1 * randomNumber : randomNumber;
  return result;
};

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
              <button onClick={this.modalShow}>Launch modal</button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Character
                translateX={getRandomInt(10, 30)}
                translateY={getRandomInt(20, 30)}
                rotateZ={getRandomInt(0, 15)}
              />
              <Character
                translateX={getRandomInt(10, 30)}
                translateY={getRandomInt(25, 40)}
                rotateZ={getRandomInt(0, 15)}
              />
              <Character
                translateX={getRandomInt(10, 30)}
                translateY={getRandomInt(17, 32)}
                rotateZ={getRandomInt(0, 15)}
              />
              <Character
                translateX={getRandomInt(10, 30)}
                translateY={getRandomInt(0, 40)}
                rotateZ={getRandomInt(0, 15)}
              />
              <Character
                translateX={getRandomInt(10, 30)}
                translateY={getRandomInt(5, 20)}
                rotateZ={getRandomInt(0, 15)}
              />
            </Col>
          </Row>
        </Container>
        {/* Backgrounds */} */}
        <BackgroundFilter
          opacity={0.2}
          colors={[
            'black',
            'yellow',
            'red',
            'purple',
            'blue',
            'yellow',
            'transparent',
            'purple',
            'orange',
            'pink'
          ]}
          animationDuration={30}
          zIndex={-3}
        />
        <BackgroundSlider
          image={backgroundImage}
          imageHeight={1164}
          animationDirection="top"
          animationDuration={5}
          zIndex={-4}
          backgroundColor="#111530"
        />
        {/* Modals */}
        <CouponModal show={this.state.modalShow} onHide={this.modalClose} />
      </div>
    );
  }
}

export default Homepage;
