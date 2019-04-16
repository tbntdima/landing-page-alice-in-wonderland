// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Context
import { Consumer } from '../../context/AppContext';

// Components
import Character from '../../components/Character';
import CouponModal from '../../components/CouponModal';
import Terms from '../../components/Terms/';

// Layout
import Background from './Background';

// Images
import casinoLogo from '../../images/logo.png';
import wonderlandLogo from '../../images/wonderland-logo.png';

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
  render() {
    return (
      <Consumer>
        {({ characters }) => {
          const [
            whiteRabbit,
            caterpillar,
            madHatter,
            alice,
            cheshireCat,
            queenOfHearts
          ] = characters.list;

          return (
            <div className="homepage">
              <Container className="homepage__content">
                <Row className="flex-column flex-md-row">
                  {/* Left column start */}
                  <Col className="d-block d-md-flex flex-column order-1 order-md-0">
                    <Row className="flex-grow-1 mt-3 mt-md-0">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--big mx-auto">
                        <Character
                          onClick={() => {
                            characters.actions.showSingleCharacter(
                              queenOfHearts.id
                            );
                          }}
                          name={queenOfHearts.name}
                          image={queenOfHearts.image}
                          translateX={getRandomInt(5, 15)}
                          translateY={getRandomInt(5, 15)}
                          rotateZ={getRandomInt(4, 8)}
                          animationDuration={6}
                        />
                      </Col>
                    </Row>
                    <Row className="flex-grow-1 mt-3 mt-md-0">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--big mx-auto">
                        <Character
                          onClick={() => {
                            characters.actions.showSingleCharacter(
                              cheshireCat.id
                            );
                          }}
                          name={cheshireCat.name}
                          image={cheshireCat.image}
                          translateX={getRandomInt(5, 15)}
                          translateY={getRandomInt(5, 15)}
                          rotateZ={getRandomInt(4, 8)}
                          animationDuration={6}
                        />
                      </Col>
                    </Row>
                  </Col>
                  {/* Left column end */}

                  {/* Center column start */}
                  <Col className="d-block d-md-flex flex-column order-0 order-md-1 mt-3">
                    <Row className="flex-grow-1 flex-column">
                      <Col className="d-flex flex-column justify-content-start align-items-center">
                        <a href="https://www.silveroakcasino.com/">
                          <img
                            src={casinoLogo}
                            alt="Silver Oak"
                            style={{
                              width: '100%',
                              maxWidth: '175px'
                            }}
                          />
                        </a>
                        <img src={wonderlandLogo} alt="Alice in wonderland" />
                        <p className="text-white text-center mt-1 mt-md-4 text--accent">
                          Click on a character to revea your Bonus.
                        </p>
                        <Character
                          onClick={() => {
                            characters.actions.showSingleCharacter(alice.id);
                          }}
                          name={alice.name}
                          image={alice.image}
                          translateX={getRandomInt(5, 15)}
                          translateY={getRandomInt(5, 15)}
                          rotateZ={getRandomInt(4, 8)}
                          animationDuration={6}
                        />
                      </Col>
                    </Row>
                  </Col>
                  {/* Center column end */}

                  {/* Right column start */}
                  <Col className="d-block d-md-flex flex-column justify-content-between order-2">
                    <Row className="justify-content-center mt-3 mt-md-5">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--big">
                        <Character
                          onClick={() => {
                            characters.actions.showSingleCharacter(
                              madHatter.id
                            );
                          }}
                          name={madHatter.name}
                          image={madHatter.image}
                          translateX={getRandomInt(5, 15)}
                          translateY={getRandomInt(5, 15)}
                          rotateZ={getRandomInt(4, 8)}
                          animationDuration={6}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center justify-content-md-end mt-3 mt-md-5">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--small">
                        <Character
                          onClick={() => {
                            characters.actions.showSingleCharacter(
                              caterpillar.id
                            );
                          }}
                          name={caterpillar.name}
                          image={caterpillar.image}
                          translateX={getRandomInt(5, 15)}
                          translateY={getRandomInt(5, 15)}
                          rotateZ={getRandomInt(4, 8)}
                          animationDuration={6}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center mt-3 mt-md-5 mb-5 mb-md-0">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--small">
                        <Character
                          onClick={() => {
                            characters.actions.showSingleCharacter(
                              whiteRabbit.id
                            );
                          }}
                          name={whiteRabbit.name}
                          image={whiteRabbit.image}
                          translateX={getRandomInt(5, 15)}
                          translateY={getRandomInt(5, 15)}
                          rotateZ={getRandomInt(4, 8)}
                          animationDuration={6}
                        />
                      </Col>
                    </Row>
                  </Col>
                  {/* Right column end */}
                </Row>
              </Container>

              <CouponModal
                show={characters.showSingleCharacter}
                onHide={characters.actions.hideSingleCharacter}
              />

              <Terms />

              <Background active={true} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Homepage;
