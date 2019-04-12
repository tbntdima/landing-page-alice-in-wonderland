import { keyframes } from 'styled-components';

const BackgroundSlide = ({ animationDirection, imageHeight }) => {
  if (animationDirection === 'top') {
    return keyframes`
      0% {
        background-position: 50% 0;
      }
      100% {
        background-position: 50% -${imageHeight}px;
      }
    `;
  } else {
    return keyframes`
      0% {
        background-position: 50% 0;
      }
      100% {
        background-position: 50% ${imageHeight}px;
      }
    `;
  }
};

export default BackgroundSlide;
