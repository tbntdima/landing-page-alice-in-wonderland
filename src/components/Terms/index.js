// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import { Container, Row, Col } from 'react-bootstrap';

// Context
import { Consumer } from '../../context/AppContext';

// Data
import termsText from '../../data/terms';

const TermsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 2px solid #837bc8;
  background: #111530;
  transform: ${props => (props.visible ? 'translateY(0)' : 'translateY(100%)')};
  transition: 0.3s;
`;

const TermsButton = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  padding: 0.2rem 2rem 0.1rem;
  border: 2px solid #837bc8;
  /* border-bottom: none; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: black;
  &:focus,
  &:active {
    outline: none;
  }
`;

const Terms = () => (
  <Consumer>
    {({ terms }) => {
      return (
        <TermsContainer visible={terms.visible}>
          <Container>
            <Row>
              <Col className="py-3">
                <p className="text-white mb-0">{termsText}</p>
              </Col>
            </Row>
          </Container>
          <TermsButton
            className="text--accent text-white"
            onClick={terms.actions.toggleTerms}
          >
            Terms
          </TermsButton>
        </TermsContainer>
      );
    }}
  </Consumer>
);

export default Terms;
