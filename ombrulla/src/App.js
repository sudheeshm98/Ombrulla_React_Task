import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import PositionStatement from './components/PositionStatement';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <PositionStatement />
      <Carousel />
    </div>
  );
}

export default App;
