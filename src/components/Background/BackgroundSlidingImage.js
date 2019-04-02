import styled from 'styled-components';
import BackgroundSlide from './BackgroundSlide';

const BackgroundSlidingImage = styled.div`
  height: ${props => props.imageHeight * 3}px;
  margin: 0 auto;
  background: url(${props => props.image}) center top repeat-y;
  animation: ${props => BackgroundSlide} ${props => props.animationDuration}s
    linear infinite;
`;

export default BackgroundSlidingImage;
