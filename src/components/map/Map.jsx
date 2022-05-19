import * as React from 'react';
import { render } from 'react-dom';
import Map, {
  Marker,
  Popup,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from 'react-map-gl';
import { useState, useMemo } from 'react';
import CITIES from '../../data/cities.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './pin';
import ControlPanel from './ControlPanel';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYW50aWRlZ3JhZGF0aW9uIiwiYSI6ImNsMzcwenM5dzE2c28zZHBvMmh5cjZ4eXcifQ.tzkHmkDhEhn38aybBrD_tw'; // Set your mapbox token here

export function MapComponent() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [isChecked, setOpen] = useState(false);
  const pins = useMemo(
    () =>
      CITIES.map((dormitory, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={dormitory.longitude}
          latitude={dormitory.latitude}
          anchor="top"
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(dormitory);
          }}>
          <Pin />
        </Marker>
      )),
    [],
  );
  return (
    <Map
      initialViewState={{
        latitude: 50.4494325180773,
        longitude: 30.461234365944392,
        zoom: 15,
      }}
      style={{ width: '100vr', height: '100vh' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}>
      {isChecked ? pins : []}
      {popupInfo && (
        <Popup
          maxWidth="320px"
          anchor="bottom"
          longitude={Number(popupInfo.longitude)}
          latitude={Number(popupInfo.latitude)}
          onClose={() => setPopupInfo(null)}>
          <img width="100%" src={popupInfo.image} alt="" />
          <div className="PopupContainer">
            {popupInfo.dormitory}, {popupInfo.state} | <p>{popupInfo.population}</p>
          </div>
        </Popup>
      )}
      <ControlPanel isChecked={isChecked} setOpen={setOpen} />
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
    </Map>
  );
}
export function renderToDom(container) {
  render(<MapComponent />, container);
}
