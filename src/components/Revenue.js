import React from 'react'
import GenerateGrafics from './GenerateGrafics'

export default function Revenue() {
  function data() {
    return [
      ['Age', 'Weight'],
      [8, 12],
      [4, 5.5],
      [11, 14],
      [4, 5],
      [3, 3.5],
      [6.5, 7]
    ];
  }
  return (
    <GenerateGrafics type={ 'Line' } data={ data } />
  )
}
