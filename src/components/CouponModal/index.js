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
  top: ${props => (props.exception ? '-7px' : 0)};
  right: ${props => (props.exception ? '22px' : 0)};
  width: 118px;
  height: 118px;
  padding: 0;
  background: url(${props => props.backgroundImage}) center center / cover
    no-repeat;
  border: none;
  outline: none;
  &:active,
  &:focus {
    outline: none;
  }
  @media (max-width: 576px) {
    top: 0;
    right: ${props => (props.exception ? '5vw' : 0)};
    width: 20vw;
    height: 20vw;
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
              <CloseButton
                backgroundImage={character.couponCloseButton}
                exception={character.name === 'White Rabbit'}
                onClick={characters.actions.hideSingleCharacter}
              />
            </Modal>
          );
        }}
      </Consumer>
    );
  }
}

export default CouponModal;
