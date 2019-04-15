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
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #111530;
  transform: ${props => (props.visible ? 'translateY(0)' : 'translateY(100%)')};
  transition: 0.3s;
`;

const TermsButton = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
`;

const Terms = () => (
  <Consumer>
    {({ terms }) => {
      console.log(terms);
      return (
        <TermsContainer visible={terms.visible}>
          <Container>
            <Row>
              <Col className="py-3">
                <p className="text-white mb-0">{termsText}</p>
              </Col>
            </Row>
          </Container>
          <TermsButton onClick={terms.actions.toggleTerms}>
            Click me
          </TermsButton>
        </TermsContainer>
      );
    }}
  </Consumer>
);

export default Terms;
