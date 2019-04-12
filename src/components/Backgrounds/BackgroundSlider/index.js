import React from 'react';
import PropTypes from 'prop-types';
import BackgroundWrapper from '../BackgroundWrapper';
import BackgroundSlidingImage from './BackgroundSlidingImage';

export const BackgroundSlider = ({
  image,
  imageHeight,
  animationDuration = 0,
  animationDirection = 'top',
  zIndex = -1,
  backgroundColor = 'transparent'
}) => (
  <BackgroundWrapper zIndex={zIndex} backgroundColor={backgroundColor}>
    <BackgroundSlidingImage
      image={image}
      imageHeight={imageHeight}
      animationDuration={animationDuration}
      animationDirection={animationDirection}
    />
  </BackgroundWrapper>
);

BackgroundSlider.propTypes = {
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  animationDuration: PropTypes.number,
  animationDirection: PropTypes.string,
  zIndex: PropTypes.number,
  backgroundColor: PropTypes.string
};
