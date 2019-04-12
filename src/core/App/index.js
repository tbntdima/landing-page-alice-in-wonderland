import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import 'react-preloading-screen/raf-polyfill';
import Homepage from '../../pages/Homepage/';
import Loadingpage from '../../pages/Loadingpage';
import { AppProvider } from '../../context/AppContext';

const App = () => (
  <Preloader fadeDuration={300} style={{ transition: '300ms' }}>
    <AppProvider>
      <Homepage />
    </AppProvider>
    <Placeholder>
      <Loadingpage />
    </Placeholder>
  </Preloader>
);

export default App;
