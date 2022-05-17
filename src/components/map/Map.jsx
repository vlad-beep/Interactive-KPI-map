// import * as React from 'react';
// import {useState, useMemo} from 'react';
// import {render} from 'react-dom';
// import Map, {
//   Marker,
//   Popup,
//   NavigationControl,
//   FullscreenControl,
//   ScaleControl,
//   GeolocateControl
// } from 'react-map-gl';

// import ControlPanel from './control-panel';
// import Pin from './pin';

// import CITIES from '../../data/cities.json';

// const TOKEN = 'pk.eyJ1IjoiYW50aWRlZ3JhZGF0aW9uIiwiYSI6ImNsMzcwenM5dzE2c28zZHBvMmh5cjZ4eXcifQ.tzkHmkDhEhn38aybBrD_tw'; // Set your mapbox token here

// export function MapComponent() {
//   const [popupInfo, setPopupInfo] = useState(null);

//   const pins = useMemo(
//     () =>
//       CITIES.map((city, index) => (
//         <Marker
//           key={`marker-${index}`}
//           longitude={city.longitude}
//           latitude={city.latitude}
//           anchor="top"
//           onClick={e => {
//             // If we let the click event propagates to the map, it will immediately close the popup
//             // with `closeOnClick: true`
//             e.originalEvent.stopPropagation();
//             setPopupInfo(city);
//           }}
//         >
//           <Pin />
//         </Marker>
//       )),
//     []
//   );

//   return (
//     <>
//       <Map
//         initialViewState={{
//           latitude: 40,
//           longitude: -100,
//           zoom: 3.5,
//           bearing: 0,
//           pitch: 0
//         }}
//         style={{width: window.innerWidth, height: window.innerHeight}}
//         mapStyle="mapbox://styles/mapbox/dark-v9"
//         mapboxAccessToken={TOKEN}
//       >
//         <GeolocateControl position="top-left" />
//         <FullscreenControl position="top-left" />
//         <NavigationControl position="top-left" />
//         <ScaleControl />

//         {pins}

//         {popupInfo && (
//           <Popup
//             anchor="buttom"
//             longitude={Number(popupInfo.longitude)}
//             latitude={Number(popupInfo.latitude)}
//             onClose={() => setPopupInfo(null)}
//           >
//             <div>
//               {popupInfo.city}, {popupInfo.state} |{' '}
//               <a
//                 target="_new"
//                 href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
//               >
//                 Wikipedia
//               </a>
//             </div>
//             <img width="100%" src={popupInfo.image} />
//           </Popup>
//         )}
//       </Map>

//       <ControlPanel />
//     </>
//   );
// }

// export function renderToDom(container) {
//   render(<MapComponent />, container);
// }

import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker, Popup, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl} from 'react-map-gl';
import {useState, useMemo} from 'react';
import CITIES from '../../data/cities.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pin from './pin';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW50aWRlZ3JhZGF0aW9uIiwiYSI6ImNsMzcwenM5dzE2c28zZHBvMmh5cjZ4eXcifQ.tzkHmkDhEhn38aybBrD_tw'; // Set your mapbox token here

export function MapComponent() {

  const [popupInfo, setPopupInfo] = useState(null);

        const pins = useMemo(
   () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="top"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
       
      )),
    []
  );
  return (
    
    <Map

 

      initialViewState={{
        latitude: 50.4494325180773, 
        longitude: 30.461234365944392,
        zoom: 15
      }}
      style={{width: '100vr', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
{pins}
{popupInfo && (
          <Popup
            margin='0'
            padding='0'
            background = '#000000'   
            maxWidth='320px'
            anchor="bottom"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
             <img width="100%" src={popupInfo.image} alt = 'rr'/>
            <div className='PopupContainer'>
              {popupInfo.city}, {popupInfo.state} |{' '}
              <h3>{popupInfo.population}</h3>
                
             
            </div>
          </Popup>
        )}

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

