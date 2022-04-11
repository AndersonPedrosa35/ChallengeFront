import React from 'react';
import { Chart } from "react-google-charts";

export default function GenerateGrafics(props) {
  
  const { data, type, className, options } = props;
  return (
    <Chart
      className={ className }
      chartType={ type }
      data={ data() }
      options={ options }
      width="500px"
      height="200px"
      legendToggle
    />   
  )
}