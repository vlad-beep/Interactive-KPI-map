import * as React from 'react';
import { FaHouseUser } from 'react-icons/fa';

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
};

function Pin({ size = 30 }) {
  return (
    <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
      <FaHouseUser color="#00346E" />
    </svg>
    // <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
    //   <path d={ICON} />
    // </svg>
  );
}

export default React.memo(Pin);
