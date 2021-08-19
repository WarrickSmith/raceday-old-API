import React, { useState, useEffect } from 'react';
import './App.css';

import racedays from './Data/racedays';
import PageHeader from './components/PageHeader/PageHeader';
import getRacing from './Services/getRaceing/getRacing';
import ShowRaceDays from './components/ShowRaceDays/ShowraceDays';

function App() {
  return (
    <div className='container'>
      <PageHeader title={'RaceDay'} />
      <ShowRaceDays racedays={racedays} />
    </div>
  );
}

export default App;
