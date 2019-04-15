// Dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Context
import { Consumer } from '../../context/AppContext';

// Components
import Character from '../../components/Character';
import CouponModal from '../../components/CouponModal';

// Layout
import Background from './Background';

// Images
import casinoLogo from '../../images/logo.svg';
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
  state = {
    modalShow: false
  };

  modalShow = () => this.setState({ modalShow: true });
  modalClose = () => this.setState({ modalShow: false });

  render() {
    return (
      <Consumer>
        {({ characters }) => {
          const whiteRabbit = characters[0];
          const caterpillar = characters[1];
          const madHatter = characters[2];
          const alice = characters[3];
          const cheshireCat = characters[4];
          const queenOfHearts = characters[5];
          return (
            <div className="homepage">
              <Container className="homepage__content">
                <Row className="flex-column flex-md-row">
                  {/* Left column start */}
                  <Col className="d-block d-md-flex flex-column order-1 order-md-0">
                    <Row className="flex-grow-1 mt-3 mt-md-0">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--big">
                        <Character
                          onClick={this.modalShow}
                          name={queenOfHearts.name}
                          image={queenOfHearts.image}
                          translateX={getRandomInt(10, 20)}
                          translateY={getRandomInt(15, 25)}
                          rotateZ={getRandomInt(4, 10)}
                          // animationDuration={6}
                        />
                      </Col>
                    </Row>
                    <Row className="flex-grow-1 mt-3 mt-md-0">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--big">
                        <Character
                          onClick={this.modalShow}
                          name={cheshireCat.name}
                          image={cheshireCat.image}
                          translateX={getRandomInt(10, 20)}
                          translateY={getRandomInt(15, 25)}
                          rotateZ={getRandomInt(4, 10)}
                          // animationDuration={6}
                        />
                      </Col>
                    </Row>
                  </Col>
                  {/* Left column end */}

                  {/* Center column start */}
                  <Col className="d-block d-md-flex flex-column order-0 order-md-1 mt-3 mt-md-0">
                    <Row className="flex-grow-1">
                      <Col className="d-flex flex-column justify-content-center align-items-center">
                        <a
                          className="mb-2"
                          href="https://www.silveroakcasino.com/"
                        >
                          <img
                            src={casinoLogo}
                            alt="Silver Oak"
                            style={{
                              width: '100%',
                              maxWidth: '200px'
                            }}
                          />
                        </a>
                        <img src={wonderlandLogo} alt="Alice in wonderland" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className="text-white text-center">
                          Click on a character to revea your Bonus.
                        </p>
                      </Col>
                    </Row>
                    <Row className="flex-grow-1">
                      <Col className="d-flex justify-content-center">
                        <Character
                          onClick={this.modalShow}
                          name={alice.name}
                          image={alice.image}
                          translateX={getRandomInt(10, 20)}
                          translateY={getRandomInt(15, 25)}
                          rotateZ={getRandomInt(4, 10)}
                          // animationDuration={6}
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
                          onClick={this.modalShow}
                          name={madHatter.name}
                          image={madHatter.image}
                          translateX={getRandomInt(10, 20)}
                          translateY={getRandomInt(15, 25)}
                          rotateZ={getRandomInt(4, 10)}
                          // animationDuration={6}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center justify-content-md-end mt-3 mt-md-5">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--small">
                        <Character
                          onClick={this.modalShow}
                          name={caterpillar.name}
                          image={caterpillar.image}
                          translateX={getRandomInt(10, 20)}
                          translateY={getRandomInt(15, 25)}
                          rotateZ={getRandomInt(4, 10)}
                          // animationDuration={6}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center mt-3 mt-md-5">
                      <Col className="d-flex align-items-center justify-content-center justify-content-md-start homepage__character--small">
                        <Character
                          onClick={this.modalShow}
                          name={whiteRabbit.name}
                          image={whiteRabbit.image}
                          translateX={getRandomInt(10, 20)}
                          translateY={getRandomInt(15, 25)}
                          rotateZ={getRandomInt(4, 10)}
                          // animationDuration={6}
                        />
                      </Col>
                    </Row>
                  </Col>
                  {/* Right column end */}
                </Row>
              </Container>

              <Background active={false} />

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
