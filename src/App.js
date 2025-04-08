import React from 'react';
import GasStationFinder from './components/GasStationFinder';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Buscador de Gasolineras</h1>
      <p>
        Esta aplicación permite obtener la gasolinera más cercana, filtrar por empresa o tipo de carburante y más.
      </p>
      <GasStationFinder />
    </div>
  );
}

export default App;
