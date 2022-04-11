import React from 'react';
import GenerateGrafics from './GenerateGrafics.js';
import IconChart2 from '../assets/icons/IconChart2.svg';

export default function Revenue() {
  const options = {
    title: "Revenue",
    hAxis: { title: "Month", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Quotes", viewWindow: { min: 0, max: 15 } },
    legend: "none"
  };
  function data() {
    return [
      ['Month', 'Quotes'],
      ['JAN', 12],
      ['FEB', 10],
      ['MAR', 14],
      ['APR', 5],
      ['MAY', 3.5],
      ['JUNE', 7],
      ['JULY', 7],
      ['AUG', 7],
      ['SEPT', 7],
    ];
  }
  return (
    <section className="container-revenueGrafic">
      <div className="revenueGrafic-title">
        <img
          src={ IconChart2 }
          alt="Revenue" 
          width={'40px'}  
        />
        <h4>Revenue</h4>
      </div>
      <hr></hr>
      <GenerateGrafics 
        type={ 'Line' } 
        data={ data } 
        options={ options } 
      />
    </section>
  )
}
