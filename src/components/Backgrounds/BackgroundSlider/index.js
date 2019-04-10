import React from 'react';
import PropTypes from 'prop-types';
import BackgroundWrapper from '../BackgroundWrapper';
import BackgroundSlidingImage from './BackgroundSlidingImage';

export const BackgroundSlider = ({
  image,
  imageHeight,
  animationDuration = 10,
  zIndex = -1,
  animationDirection = 'top'
}) => (
  <BackgroundWrapper zIndex={zIndex}>
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
  zIndex: PropTypes.number,
  animationDirection: PropTypes.string
};
