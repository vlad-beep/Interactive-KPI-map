import * as React from 'react';
import Map from 'react-map-gl';
import { render } from 'react-dom';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYW50aWRlZ3JhZGF0aW9uIiwiYSI6ImNsMzcwenM5dzE2c28zZHBvMmh5cjZ4eXcifQ.tzkHmkDhEhn38aybBrD_tw';
export function FormMap() {
  return (
    <Map
      initialViewState={{
        latitude: 50.44801,
        longitude: 30.4572,
        zoom: 14,
      }}
      style={{ width: '100wr', height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}></Map>
  );
}
export function renderToDom(container) {
  render(<FormMap />, container);
}
