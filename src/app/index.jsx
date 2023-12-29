import React from 'react';

import About from '../pages/about';
import Contacts from '../pages/contacts';
import Home from '../pages/home';
import Header from '../widgets/header';
import styles from './styles.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
        <Header />
        <Home />
        <About />
        <Contacts />
    </div>
      
  );
};

export default App;
