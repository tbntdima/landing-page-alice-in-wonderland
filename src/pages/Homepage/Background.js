import React, { Fragment } from 'react';

// Components
import {
  BackgroundSlider,
  BackgroundFilter
} from '../../components/Backgrounds/';
// Images
import mainBackground from '../../images/backgrounds/mainBackground.jpg';
import cardsBacground from '../../images/backgrounds/cardsBackground.png';
import thingsBackground from '../../images/backgrounds/thingsBackground.png';

const Background = ({ active = true }) => {
  return (
    <Fragment>
      <BackgroundFilter
        opacity={0.2}
        colors={[
          'black',
          'yellow',
          'red',
          'purple',
          'blue',
          'yellow',
          'transparent',
          'purple',
          'orange',
          'pink'
        ]}
        animationDuration={active ? 30 : 0}
        zIndex={-3}
      />
      <BackgroundSlider
        image={cardsBacground}
        imageHeight={887}
        animationDirection="top"
        animationDuration={active ? 5 : 0}
        zIndex={-4}
      />
      <BackgroundSlider
        image={thingsBackground}
        imageHeight={992}
        animationDirection="top"
        animationDuration={active ? 8 : 0}
        zIndex={-5}
      />
      <BackgroundSlider
        image={mainBackground}
        imageHeight={1164}
        animationDirection="top"
        animationDuration={active ? 15 : 0}
        zIndex={-6}
        backgroundColor="#111530"
      />
    </Fragment>
  );
};

export default Background;
