import React from 'react';

import Header from '../../components/Header/Header';

import './HomeScreen.scss';

function HomeScreen() {
  return (
    <div className='container'>
      <Header />
      <span className='title' >hello word!!</span>
    </div>
  );
}

export default HomeScreen;