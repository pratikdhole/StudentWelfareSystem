import React, { useState } from 'react';
import { Slider } from 'react-bootstrap';

const Sliderb = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div>
      <Slider
        value={sliderValue}
        onChange={(value) => setSliderValue(value)}
        min={0}
        max={100}
        step={1}
        tooltip="auto"
        tooltipPlacement="top"
      />
      <p>{sliderValue}</p>
    </div>
  );
};

export default Sliderb;