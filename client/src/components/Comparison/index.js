import React, { useState } from 'react';
import SwitchToggle from '../SwitchToggle';

const CompareCountry = ({ enabled, setEnabled }) => {
  
  return (
    <div>
      <span>Compare Countries</span>
      <SwitchToggle 
        isOn={enabled}
        handleToggle={() => setEnabled(!enabled)}
        onColor="#06D6A0"
      />

    </div>
  )
}

export default CompareCountry;