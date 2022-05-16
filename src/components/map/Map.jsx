/* global document */
import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW50aWRlZ3JhZGF0aW9uIiwiYSI6ImNsMzcwenM5dzE2c28zZHBvMmh5cjZ4eXcifQ.tzkHmkDhEhn38aybBrD_tw'; // Set your mapbox token here

export function MapComponent() {
  return (
    <Map
      initialViewState={{
        latitude: 50.4494325180773, 
        longitude: 30.461234365944392,
        zoom: 15
      }}
      style={{width: window.innerWidth, height: window.innerHeight}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
}

render(<MapComponent />, document.body.appendChild(document.createElement('div')));

