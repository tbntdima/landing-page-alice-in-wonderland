import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Background from '../../components/Background';
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
        <Background
          image={frontImage}
          imageHeight={631}
          animationDirection="top"
          animationDuration={2}
          zIndex={-1}
        />
        <Background
          image={backImage}
          imageHeight={1638}
          animationDirection="bottom"
          animationDuration={5}
          zIndex={-2}
        />
      </div>
    );
  }
}

export default Homepage;
