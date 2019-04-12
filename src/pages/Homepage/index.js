// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Context
import { Consumer } from '../../context/AppContext';

// Components
import Character from '../../components/Character';
import {
  BackgroundSlider,
  BackgroundFilter
} from '../../components/Backgrounds/';
import CouponModal from '../../components/CouponModal';

// Images
import mainBackground from '../../images/backgrounds/mainBackground.jpg';
import cardsBacground from '../../images/backgrounds/cardsBackground.png';
import thingsBackground from '../../images/backgrounds/thingsBackground.png';

// Styles
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
      <Consumer>
        {({ characters }) => {
          return (
            <div className="homepage">
              <Container className="homepage__content">
                <Row>
                  <Col>
                    <button onClick={this.modalShow}>Launch modal</button>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ textAlign: 'center' }}>
                    {characters.map(character => (
                      <Character
                        onClick={this.modalShow}
                        name={character.name}
                        image={character.image}
                        translateX={getRandomInt(10, 30)}
                        translateY={getRandomInt(20, 30)}
                        rotateZ={getRandomInt(0, 15)}
                        animationDuration={6}
                      />
                    ))}
                  </Col>
                </Row>
              </Container>
              {/* Backgrounds */}
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
                image={cardsBacground}
                imageHeight={887}
                animationDirection="top"
                animationDuration={5}
                zIndex={-4}
              />
              <BackgroundSlider
                image={thingsBackground}
                imageHeight={992}
                animationDirection="top"
                animationDuration={8}
                zIndex={-5}
              />
              <BackgroundSlider
                image={mainBackground}
                imageHeight={1164}
                animationDirection="top"
                animationDuration={15}
                zIndex={-6}
                backgroundColor="#111530"
              />
              {/* Modals */}
              <CouponModal
                show={this.state.modalShow}
                onHide={this.modalClose}
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Homepage;
