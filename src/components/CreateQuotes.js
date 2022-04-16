import React, { useState } from 'react';
import IconArrow from '../assets/icons/IconArrow.svg';
import { createQuote } from '../utils/Api';

export default function CreateQuotes() {
  const MAX_LENGHT_NAME_CITY_GALES = 58;
  const MAX_LENGHT_NAME = 15;
  const [quote, setQuotes] = useState({
    from: '',
    destination: '',
    departDate: convertDate(new Date()),
    name: '',
    returnDate: '',
    people: '1',
    transportation: 'airplane'
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createQuote(quote).then((res) => {});
    setQuotes({from: '', destination: '', departDate: '1', name: '',
      returnDate: '1', people: '1', transportation: 'airplane' })
  }

  function convertDate(date) {
    const data = new Date(date);
    const month = data.getMonth().toString().length === 1 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
    const dateArray = `${data.getFullYear()}-${month}-${data.getDate()}`;
    return dateArray;
  }

  return (
    <section className="container-createQuotes">
      <div className="createQuotes-title">
        <img src={IconArrow} alt="doubleArrow" width={'50px'}/>
        <h4>Quick Quotes</h4>
      </div>
      <hr></hr>
      <form
        data-testid="form"
        className="form-createQuotes"
        onSubmit={ handleSubmit }
      >
        <label
          htmlFor='from'
          data-testid="from"
        >
          From
          <input
            type="text"
            value={ quote.from }
            onChange={ ({ target }) => setQuotes({ ...quote, from: target.value }) }
            maxLength={ MAX_LENGHT_NAME_CITY_GALES }
          />
        </label>
        <label
          htmlFor='destination'
          data-testid="destination"
        >
          Destination
          <input
            type="text"
            value={ quote.destination }
            onChange={ ({ target }) => setQuotes({ ...quote, destination: target.value }) }
            maxLength={ MAX_LENGHT_NAME_CITY_GALES }
          />
        </label>
        <label
          htmlFor='departDate'
          data-testid="departDate"
        >
          Depart Date
          <input
            type="date"
            value={ quote.departDate } 
            onChange={({ target }) => setQuotes({ ...quote, departDate: target.value })}
            min={ convertDate(Date.now()) }
            max={ convertDate(new Date(2023, 11, 31)) }
          />
        </label>
        <label
          htmlFor='returnDate'
          data-testid="returnDate"
        >
          Return Date
          <input
            type="date"
            value={ quote.returnDate }
            onChange={({ target }) => setQuotes({ ...quote, returnDate: target.value })}
            min={ quote.departDate }
          />
        </label>
        <label
          htmlFor='people'
          data-testid="people"  
        >
          People
          <select
            value={ quote.people }
            onChange={ ({ target }) => setQuotes({ ...quote, people: target.value }) }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </label>
        <label
          htmlFor='transportation'
          data-testid="transportation"  
        >
          Transportation
          <select
            value={ quote.transportation }
            onChange={ ({ target }) => setQuotes({ ...quote, transportation: target.value }) }
          >
            <option>airplane</option>
            <option>bus</option>
            <option>train</option>
            <option>bicycle</option>
          </select>
        </label>
        <label
          htmlFor='name'
          data-testid="name"
        >
          Name
          <input
            type="text"
            value={ quote.name }
            onChange={ ({ target }) => setQuotes({ ...quote, name: target.value }) }
            maxLength={ MAX_LENGHT_NAME }
          />
        </label>
        <button
          type='submit'
          className="btn-submit"
          disabled={ 
            !quote.from || !quote.destination || !quote.departDate 
            || !quote.returnDate || !quote.people || !quote.transportation 
            || !quote.name }
        >
            Create a quote
          </button>
      </form>
    </section>
  )
}
