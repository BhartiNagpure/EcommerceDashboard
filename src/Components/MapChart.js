// MapChart.js
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapChart = () => {
  const geojsonFeature = {
    type: 'FeatureCollection',
    features: [
      {
      Example: { type: 'Feature', properties: { name: 'Country Name' }, geometry: { type: 'Polygon' } }
      }
    ],
  };

  const onEachCountry = (country, layer) => {
    layer.bindTooltip(country.properties.name, { permanent: true, direction: 'center' });
  };

  return (
    <div style={{ height: '300px', width: '100%' }} >
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        <MapContainer
          center={[0, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={geojsonFeature} onEachFeature={onEachCountry} style={{ color: 'grey' }} />
        </MapContainer>
      </div>

    </div>
  );
};

export default MapChart;
