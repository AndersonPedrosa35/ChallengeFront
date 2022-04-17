import React, { useState } from 'react';
import { deleteItem } from '../utils/Api';
import '../css/Remove.css';

export default function Remove() {
  const [id, setId] = useState('');
  const [collection, setCollection] = useState('');

  function submit(e) {
    e.preventDefault();
    const formatColletion = collection.toLowerCase();
    const formatId = id.toLowerCase();
    deleteItem(formatColletion, formatId).then((res) => {
      if (res === undefined) {
        return alert('Item not found');
      } else {
        alert("Item deleted");
        setId('');
        setCollection('');
      }
    });
  }
  return (
    <section className="remove-section">
      <h3>Remove item in collection by id</h3>
      <form onSubmit={ submit }>
        <label htmlFor='collection'>
          What's collection want remove ? (Quotes, Employees or Leads)
          <input
            id='collection'
            type="text"
            placeholder='Collection'
            value={ collection }
            onChange={ ({ target }) => setCollection(target.value) }
          />
        </label>
        <label htmlFor='id'>
          What's id want remove ?
          <input
            id='id'
            type="text"
            placeholder='ID'
            maxLength='50' 
            value={ id }
            onChange={ ({ target }) => setId(target.value) }
          />
        </label>
        <button type="submit">Remover</button>
      </form>
    </section>

  )
}
