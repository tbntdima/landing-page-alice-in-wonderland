import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Character from '../../components/Character';
import {
  BackgroundSlider,
  BackgroundFilter
} from '../../components/Backgrounds/';
import CouponModal from '../../components/CouponModal';
import frontImage from '../../images/backgrounds/front.jpg';
import backImage from '../../images/backgrounds/back.png';
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

        {/* Backgrounds */}
        {/* <BackgroundFilter
          opacity={0.65}
          colors={['purple', 'green', 'blue', 'orange']}
          animationDuration={0}
          backgroundColor="white"
          zIndex={-1}
        />
        <BackgroundSlider
          image={frontImage}
          imageHeight={631}
          animationDirection="top"
          animationDuration={10}
          zIndex={-2}
        /> */}
        <BackgroundFilter
          opacity={0.65}
          colors={['purple', 'green', 'blue', 'orange']}
          animationDuration={10}
          zIndex={-3}
        />
        <BackgroundSlider
          image={backImage}
          imageHeight={1638}
          animationDirection="top"
          animationDuration={2}
          zIndex={-4}
          backgroundColor=""
        />

        {/* Modals */}
        <CouponModal show={this.state.modalShow} onHide={this.modalClose} />
      </div>
    );
  }
}

export default Homepage;
