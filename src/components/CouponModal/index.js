// Dependecies
import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

// Context
import { Consumer } from '../../context/AppContext';

// Styles
import './index.scss';

const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: black;
  border: none;
  border-radius: 50%;
  outline: none;
  @media (max-width: 576px) {
    top: 7vw;
    right: 5vw;
    width: 10vw;
    height: 10vw;
  }
`;

class CouponModal extends React.Component {
  render() {
    return (
      <Consumer>
        {({ characters }) => {
          const character = characters.list[characters.currentCharacterId];
          return (
            <Modal {...this.props} centered>
              <a href={character.couponUrl}>
                <img src={character.couponImage} alt={character.name} />
              </a>
              <CloseButton onClick={characters.actions.hideSingleCharacter} />
            </Modal>
          );
        }}
      </Consumer>
    );
  }
}

export default CouponModal;
