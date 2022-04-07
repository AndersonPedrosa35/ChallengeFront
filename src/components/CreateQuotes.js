import React from 'react';

export default function CreateQuotes() {
  return (
    <section className="container-createQuotes">
      <h1>Quick Quotes</h1>
      <form className="form-createQuotes">
        <label htmlFor='from'>
          From
          <input type="text" />
        </label>
        <label htmlFor='destination'>
          Destination
          <input type="text" />
        </label>
        <label htmlFor='departDate'>
          Depart Date
          <select>
            <option>1</option>
          </select>
        </label>
        <label htmlFor='returnDate'>
          Return Date
          <select>
            <option>1</option>
          </select>
        </label>
        <label htmlFor='people'>
          People
          <select>
            <option>1</option>
          </select>
        </label>
        <label htmlFor='transportation'>
          Transportation
          <select>
            <option>1</option>
          </select>
        </label>
        <label htmlFor='name'>
          Name
          <input type="text" />
        </label>
        <button
          type='submit'
          className="btn-submit"
        >
            Create a quote
          </button>
      </form>
    </section>
  )
}
