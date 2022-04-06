import React from 'react';
import { Chart } from "react-google-charts";

export default function GenerateGrafics(props) {
  const options = {
    title: "Age vs. Weight comparison",
    hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none"
  };
  const { data, type } = props;
  return (
    <Chart
      chartType={ type }
      data={ data() }
      options={ options }
      width="80%"
      height="100%"
      legendToggle
    />   
  )
}