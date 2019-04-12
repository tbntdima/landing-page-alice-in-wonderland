import { keyframes } from 'styled-components';

/**
 * An implementation of SlideBackgroundImage keyframes using
 * Transform-Translate3d.
 * Pro: Much smoother
 * Con: Flickers on IOS devices
 */
const BackgroundSlide = ({ animationDirection, imageHeight }) => {
  if (animationDirection === 'top') {
    return keyframes`
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(0, -${imageHeight}px, 0);
      }
    `;
  } else {
    return keyframes`
      0% {
        transform: translate3d(0, calc(-${imageHeight}px), 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    `;
  }
};

export default BackgroundSlide;
