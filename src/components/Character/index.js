import React from 'react';
import styled, { keyframes } from 'styled-components';
import alice from '../../images/characters/alice.png';

const floating = ({ translateX, translateY, rotateZ }) => {
  return keyframes`
      0% {
        transform: translateX(0) translateY(0) rotateZ(0);
      }
      30% {
        transform: translateX(${-translateX}px) translateY(${-translateY}px) rotateZ(-${rotateZ}deg);
      }
      
      60% {
        transform: translateX(${translateX}px) translateY(${translateY}px) rotateZ(${rotateZ}deg);
      }
      100% {
        transform: translateX(0) translateY(0) rotateZ(0);
      }
    `;
};

const FloatingWrapper = styled.div`
  display: inline-block;
  transform-origin: bottom center;
  animation: ${props => floating} 6s linear infinite;
`;

const Character = ({ translateX, translateY, rotateZ }) => {
  return (
    <FloatingWrapper
      translateX={translateX}
      translateY={translateY}
      rotateZ={rotateZ}
    >
      <img src={alice} alt="Alice" />
    </FloatingWrapper>
  );
};

export default Character;
