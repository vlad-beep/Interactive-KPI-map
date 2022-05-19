import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { FaHouseUser } from 'react-icons/fa';

const ControlPanelContainert = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 240px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 12px 24px;
  margin: 20px;
  text-transform: uppercase;
  outline: none;
  box-shadow: 0px 13px 15px rgb(36 37 38 / 3%);
  border-radius: 10px;
`;

export default function ControlPanel({ isChecked, setOpen }) {
  return (
    <ControlPanelContainert>
      <h3>Legend</h3>
      <label>
        <p>Гуртожитки</p>
        <input type="checkbox" checked={isChecked} onChange={() => setOpen(!isChecked)}></input>
      </label>
      <FaHouseUser size={20} />
    </ControlPanelContainert>
  );
}

// import React from 'react'
// import styled from 'styled-components'
// import Checkbox from 'material-ui/Checkbox'
// const ControlPanelContainert = styled.div`
//     position: top right;
//     margin: 20px;
//     height: max-content;
//     width: max-content;
//     padding: 0;
//     background: #FFFFFF;
//     box-shadow: 0px 13px 15px rgb(36 37 38 / 3%);
//     border-radius: 10px;
// `
// const ControlPanelContant = styled.div`

// `
// const ControlPanel = () => {
//   return (
//     <ControlPanelContainert>
//          <Checkbox
//               label='Show railway lines'
//               onCheck={this.handleCheckbox}
//               checked={this.state.teal.isLayerChecked}
//               value='teal'
//             />
//     </ControlPanelContainert>
//   )
// }

// export default ControlPanel
