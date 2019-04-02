import { keyframes } from 'styled-components';

const BackgroundSlide = ({ animationDirection, imageHeight }) => {
  if (animationDirection === 'top') {
    return keyframes`
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-${imageHeight}px);
      }
    `;
  } else {
    return keyframes`
      0% {
        transform: translateY(calc(-${imageHeight}px));
      }
      100% {
        transform: translateY(0);
      }
    `;
  }
};

export default BackgroundSlide;
