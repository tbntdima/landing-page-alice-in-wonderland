import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  transform-origin: bottom center;
  animation: ${props => floating} ${props => props.animationDuration}s linear
    infinite;
  cursor: pointer;
`;

const Character = ({
  name,
  image,
  animationDuration = 0,
  translateX,
  translateY,
  rotateZ,
  onClick
}) => {
  return (
    <FloatingWrapper
      translateX={translateX}
      translateY={translateY}
      rotateZ={rotateZ}
      animationDuration={animationDuration}
      onClick={onClick}
    >
      <img src={image} alt={name} />
    </FloatingWrapper>
  );
};

export default Character;
