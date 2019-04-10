import React from 'react';
import Homepage from '../../pages/Homepage/';
import { Preloader, Placeholder } from 'react-preloading-screen';

const App = () => (
  <Preloader>
    <Homepage />
    <Placeholder>Loading</Placeholder>
  </Preloader>
);

export default App;
