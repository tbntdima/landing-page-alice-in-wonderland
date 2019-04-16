// Dependecies
import React from 'react';
import { Modal } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

// Context
import { Consumer } from '../../context/AppContext';

// Styles
import './index.scss';

const CloseButton = styled.button`
  display: block;
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

const CTA = styled.a`
  display: block;
  position: absolute;
  bottom: 0;
  left: ${props => (props.exception ? '46%' : '50%')};
  transform: translateX(-50%) translateY(40%);
  width: 300px;
  height: 105px;
  background: url(${props => props.ctaImage}) center center / cover;
  /* overflow: hidden; */
  z-index: 2;
  @media (max-width: 576px) {
    width: 50vw;
    height: 17.6vw;
    left: ${props => (props.exception ? '48%' : '50%')};
  }
`;

const glow = keyframes`
0% {
  box-shadow: 0px 0px 25px 30px #65b434;
}
50% {
  box-shadow: 0px 0px 25px 5px #65b434;
}
100% {
  box-shadow: 0px 0px 25px 30px #65b434;
}
`;
const glowSmall = keyframes`
0% {
  box-shadow: 0px 0px 15px 18px #65b434;
}
50% {
  box-shadow: 0px 0px 15px 5px #65b434;
}
100% {
  box-shadow: 0px 0px 15px 18px #65b434;
}
`;
const CRAGlow = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  left: ${props => (props.exception ? '46%' : '50%')};
  transform: translateX(-50%) translateY(40%);
  width: 244px;
  height: 63px;
  border-radius: 25px;
  box-shadow: 0px 0px 20px 30px #65b434;
  z-index: 1;
  animation: ${glow} 2s infinite;
  @media (max-width: 576px) {
    width: 35vw;
    height: 15vw;
    left: ${props => (props.exception ? '48%' : '50%')};
    box-shadow: 0px 0px 15px 18px #65b434;
    animation: ${glowSmall} 2s infinite;
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
              <a href={character.couponUrl} ref={node => (this.content = node)}>
                <img src={character.couponImage} alt={character.name} />
              </a>
              <CTA
                href={character.couponUrl}
                ctaImage={character.couponCTA}
                exception={character.name === 'White Rabbit'}
              />
              <CRAGlow />
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
