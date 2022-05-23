import React from 'react';
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
import KPI from '../../data/KPI.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import ControlPanel from './ControlPanel';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiYW50aWRlZ3JhZGF0aW9uIiwiYSI6ImNsMzcwenM5dzE2c28zZHBvMmh5cjZ4eXcifQ.tzkHmkDhEhn38aybBrD_tw'; // Set your mapbox token here

export function MapComponent() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [isChecked, setOpen] = useState(true);
  const [filter, setfilter] = useState('ALL');

  // const pins = useMemo(
  //   () =>
  //     KPI.features
  //       .filter((location) => {
  //         if (filter === 'ALL') {
  //           return true;
  //         }
  //         if (filter === location.properties.type) {
  //           return true;
  //         }
  //         return false;
  //       })
  //       .map((location, index) => (
  //         <Marker
  //           key={`marker-${index}`}
  //           longitude={location.geometry.coordinates[0]}
  //           latitude={location.geometry.coordinates[1]}
  //           anchor="top"
  //           cursor="pointer"
  //           onClick={(e) => {
  //             // If we let the click event propagates to the map, it will immediately close the popup
  //             // with `closeOnClick: true`
  //             e.originalEvent.stopPropagation();
  //             setPopupInfo(location);
  //           }}>
  //           <img src={location.properties.icon} width={20} height={20} alt="icon" />
  //         </Marker>
  //       )),
  //   [],
  // );
  return (
    <>
      <Map
        initialViewState={{
          latitude: 50.44801,
          longitude: 30.4572,
          zoom: 16,
        }}
        style={{ width: '100vr', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}>
        {/* {isChecked ? pins : []} */}
        {KPI.features
          .filter((location) => {
            if (filter === 'ALL') {
              return true;
            }
            if (filter === location.properties.type) {
              return true;
            }
            return false;
          })
          .map((location, index) => (
            <Marker
              key={`marker-${index}`}
              longitude={location.geometry.coordinates[0]}
              latitude={location.geometry.coordinates[1]}
              anchor="top"
              cursor="pointer"
              onClick={(e) => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                setPopupInfo(location);
              }}>
              <img src={location.properties.icon} width={20} height={20} alt="icon" />
            </Marker>
          ))}
        {popupInfo && (
          <Popup
            maxWidth="320px"
            anchor="bottom"
            longitude={Number(popupInfo.geometry.coordinates[0])}
            latitude={Number(popupInfo.geometry.coordinates[1])}
            onClose={() => setPopupInfo(null)}>
            <img width="100%" src={popupInfo.properties.image} alt="" />
            <div className="PopupContainer">
              <h2>
                {popupInfo.properties.name} | {popupInfo.properties.state}
              </h2>
              <p>{popupInfo.properties.description}</p>
              <h2>Адреса:</h2>
              <p>{popupInfo.properties.adress}</p>
            </div>
          </Popup>
        )}
        <ControlPanel isChecked={isChecked} setOpen={setOpen} />
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
      </Map>
      <input
        type="checkbox"
        value="ALL"
        onChange={(event) => setfilter(event.target.value)}></input>
      <input
        type="checkbox"
        value="Dormitory"
        onChange={(event) => setfilter(event.target.value)}></input>
      <input
        type="checkbox"
        value="Campus"
        onChange={(event) => setfilter(event.target.value)}></input>
      <input
        type="checkbox"
        value="Park"
        onChange={(event) => setfilter(event.target.value)}></input>

      {/* <select value={filter} onChange={(event) => setfilter(event.target.value)}>
        <option>ALL</option>
        <option>Dormitory</option>
        <option>Campus</option>
      </select> */}
    </>
  );
}
export function renderToDom(container) {
  render(<MapComponent />, container);
}

// import React, { useState } from 'react';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import ReactMapGL, {
//   GeolocateControl,
//   FullscreenControl,
//   NavigationControl,
//   Marker,
//   Popup,
// } from 'react-map-gl';
// import zahradkaUrl from '../../assets/zahradka.svg';
// import krabickaUrl from '../../assets/krabicka.svg';
// import './map.scss';
// const MAPBOX_TOKEN =
//   'pk.eyJ1IjoiYW50aWRlZ3JhZGF0aW9uIiwiYSI6ImNsMzcwenM5dzE2c28zZHBvMmh5cjZ4eXcifQ.tzkHmkDhEhn38aybBrD_tw'; // Set your mapbox token here
// import restaurace from '../../data/kpi.json'
// export const MapComponent = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 48.9747357,
//     longitude: 14.474285,
//     zoom: 15,
//   });

//   const restaurace = [
//     {
//       id: 1,
//       object: 'Esence Cafe',
//       latitude: 48.974643727964256,
//       longitude: 14.473364057153596,
//       ikonka: zahradkaUrl,
//       typ: 'diner',
//     },
//     {
//       id: 2,
//       object: 'U Žebeerka',
//       latitude: 48.97350051935816,
//       longitude: 14.475148794510178,
//       ikonka: krabickaUrl,
//       typ: 'pizza',
//     },
//     {
//       id: 3,
//       object: 'Zvon',
//       latitude: 48.97430612842562,
//       longitude: 14.47525624845416,
//       ikonka: zahradkaUrl,
//       typ: 'diner',
//     },
//     {
//       id: 4,
//       object: 'Café Datel',
//       latitude: 48.975387,
//       longitude: 14.4729018,
//       ikonka: zahradkaUrl,
//       typ: 'diner',
//     },
//     {
//       id: 5,
//       object: 'Masné krámy',
//       latitude: 48.9759719,
//       longitude: 14.4735304,
//       ikonka: zahradkaUrl,
//       typ: 'diner',
//     },
//     {
//       id: 6,
//       object: 'Gateway of India',
//       latitude: 48.9746033,
//       longitude: 14.4868499,
//       ikonka: krabickaUrl,
//       typ: 'pizza',
//     },
//     {
//       id: 7,
//       object: 'Široko',
//       latitude: 48.9731339,
//       longitude: 14.4740394,
//       ikonka: zahradkaUrl,
//       typ: 'diner',
//     },
//     {
//       id: 8,
//       object: 'Železná panna',
//       latitude: 48.9728875755461,
//       longitude: 14.472468662231268,
//       ikonka: zahradkaUrl,
//       typ: 'diner',
//     },
//   ];

//   const [otevrenyPopup, setOtevrenyPopup] = useState(null);

//   const [filter, setfilter] = useState('ALL');

//   return (
//     <>
//       <ReactMapGL
//         {...viewport}
//         onViewportChange={(novyViewport) => setViewport(novyViewport)}
//         style={{ width: '100vr', height: '100vh' }}
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//         mapboxAccessToken={MAPBOX_TOKEN}>
//         <GeolocateControl position="top-left" />
//         <FullscreenControl position="top-left" />
//         <NavigationControl position="top-left" />

//         {restaurace
//           .filter((kpi) => {
//             if (filter === 'ALL') {
//               return true;
//             }
//             if (filter === kpi.typ) {
//               return true;
//             }
//             return false;
//           })
//           .map((kpi) => (
//             <React.Fragment key={kpi.id}>
//               <Marker
//                 latitude={kpi.latitude}
//                 longitude={kpi.longitude}
//                 offsetLeft={-25}
//                 offsetTop={-50}>
//                 <button
//                   onClick={() => {
//                     setOtevrenyPopup(kpi.id);
//                   }}
//                   classobject="mapa__marker">
//                   <img src={kpi.ikonka} width={50} height={50} alt="" />
//                 </button>
//               </Marker>
//               {otevrenyPopup === kpi.id ? (
//                 <Popup
//                   offsetTop={-60}
//                   latitude={kpi.latitude}
//                   longitude={kpi.longitude}
//                   onClose={() => {
//                     setOtevrenyPopup(null);
//                   }}>
//                   {kpi.object}
//                 </Popup>
//               ) : null}
//             </React.Fragment>
//           ))}
//       </ReactMapGL>
//       <select value={filter} onChange={(event) => setfilter(event.target.value)}>
//         <option>ALL</option>
//         <option>diner</option>
//         <option>pizza</option>
//       </select>
//     </>
//   );
// };
