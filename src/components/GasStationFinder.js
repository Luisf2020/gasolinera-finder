import React, { useState } from 'react';
import axios from 'axios';

const GasStationFinder = () => {
  const [coords, setCoords] = useState({ lat: '', lng: '' });
  const [filter, setFilter] = useState({ company: '', fuelType: '' });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Función para obtener geolocalización del navegador
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('La geolocalización no es soportada por este navegador.');
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });
        setError('');
        setLoading(false);
      },
      (err) => {
        setError('Error al obtener la ubicación: ' + err.message);
        setLoading(false);
      }
    );
  };

  // Función para manejar cambios en los inputs de coordenadas
  const handleCoordsChange = (e) => {
    setCoords({ ...coords, [e.target.name]: e.target.value });
  };

  // Función para manejar cambios en los filtros
  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // Función para realizar la consulta a la API
  const buscarGasolineras = async () => {
    if (!coords.lat || !coords.lng) {
      setError('Debes proporcionar las coordenadas.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      // Ejemplo de endpoint, se debe reemplazar por la URL real y los parámetros que la API requiere.
      const endpoint = 'https://api.example.com/gasolineras';
      const params = {
        lat: coords.lat,
        lng: coords.lng,
        company: filter.company,
        fuelType: filter.fuelType
      };

      const response = await axios.get(endpoint, { params });
      // Suponemos que la respuesta trae un array de gasolineras
      setResults(response.data);
    } catch (err) {
      setError('Error al consultar la API: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Obtener Gasolineras</h2>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={getLocation}>Obtener mi ubicación</button>
        <p>O ingresa tus coordenadas:</p>
        <input
          type="text"
          name="lat"
          placeholder="Latitud"
          value={coords.lat}
          onChange={handleCoordsChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="lng"
          placeholder="Longitud"
          value={coords.lng}
          onChange={handleCoordsChange}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Filtros adicionales</h3>
        <input
          type="text"
          name="company"
          placeholder="Empresa suministradora"
          value={filter.company}
          onChange={handleFilterChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="fuelType"
          placeholder="Tipo de carburante"
          value={filter.fuelType}
          onChange={handleFilterChange}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={buscarGasolineras}>Buscar Gasolineras</button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {results && results.length > 0 && (
        <div>
          <h3>Resultados:</h3>
          <ul>
            {results.map((gasolinera, index) => (
              <li key={index}>
                <strong>{gasolinera.nombre}</strong> - {gasolinera.direccion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GasStationFinder;
