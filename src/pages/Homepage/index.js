import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Background from '../../components/Background';
import './index.scss';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Container>
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
        <Background />
      </div>
    );
  }
}

export default Homepage;
