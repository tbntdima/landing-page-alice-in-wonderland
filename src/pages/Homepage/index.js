import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  BackgroundSlider,
  BackgroundFilter
} from '../../components/Backgrounds/';
import frontImage from '../../images/backgrounds/front.jpg';
import backImage from '../../images/backgrounds/back.png';
import './index.scss';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Container className="homepage__content">
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
        <BackgroundSlider
          image={frontImage}
          imageHeight={631}
          animationDirection="top"
          animationDuration={10}
          zIndex={-1}
        />
        <BackgroundFilter
          opacity={0.65}
          colors={['red', 'green', 'blue', 'orange']}
          animationDuration={1}
          zIndex={-2}
        />
        <BackgroundSlider
          image={backImage}
          imageHeight={1638}
          animationDirection="bottom"
          animationDuration={10}
          zIndex={-3}
        />
      </div>
    );
  }
}

export default Homepage;
