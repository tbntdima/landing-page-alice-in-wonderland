import React from 'react';
import PropTypes from 'prop-types';
import BackgroundWrapper from '../BackgroundWrapper';
import Filter from './Filter';

export const BackgroundFilter = ({
  opacity = 0.5,
  colors,
  animationDuration = 10,
  zIndex = -1
}) => {
  return (
    <BackgroundWrapper zIndex={zIndex}>
      <Filter
        opacity={opacity}
        colors={colors}
        animationDuration={animationDuration}
      />
    </BackgroundWrapper>
  );
};

BackgroundFilter.propTypes = {
  opacity: PropTypes.number,
  colors: PropTypes.array,
  animationDuration: PropTypes.number,
  zIndex: PropTypes.number
};
