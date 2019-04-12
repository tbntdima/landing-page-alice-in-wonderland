import styled from 'styled-components';
import SlideBackgroundImage from './SlideBackgroundImage';

const BackgroundSlidingImage = styled.div`
  height: 100%;
  margin: 0 auto;
  background: url(${props => props.image}) center top repeat-y;
  animation: ${props => SlideBackgroundImage}
    ${props => props.animationDuration}s linear infinite;
  /* Hardware acceleration */
  transform: translate3d(0, 0, 0);
`;

export default BackgroundSlidingImage;
