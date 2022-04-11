import React from 'react';
import GenerateGrafics from './GenerateGrafics.js';
import IconChart from '../assets/icons/IconChart.svg';


function randomNumber() {
  return Math.round(Math.random() * 15);
}

export function data() {
  return [
    ['Month', 'Quotes'],
    ['', randomNumber()],
    ['', randomNumber()],
    ['', randomNumber()],
    ['', randomNumber()],
    ['', randomNumber()]
  ];
}

export default function PotentialRevenue() {
 
  const options = {
    legend: 'none',
    pieSliceText: 'label',
    title: '',
    pieStartAngle: 100,
  };

  return (
    <section className="container-pizzaGrafic">
      <div className="pizzaGrafic-title">
        <img
          src={IconChart}
          alt="Potential Revenue"
          width={'40px'}
        />
        <h4>Potential Revenue</h4>
      </div>
      <div className="container-grafic-item">
      <GenerateGrafics
        type={ 'PieChart' } 
        data={ data } 
        options={ options }
      />
      <GenerateGrafics
        type={ 'PieChart' } 
        data={ data } 
        options={ options }
      />
      <GenerateGrafics
        type={ 'PieChart' } 
        data={ data } 
        options={ options }
      />
      </div>
    </section>
  )
}
