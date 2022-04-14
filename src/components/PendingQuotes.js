import React, { useState, useEffect } from 'react';
import IconHistory from '../assets/icons/IconHistory.svg';
import { getQuotes } from '../utils/Api';

export default function PendingQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes().then((response) => {
      setQuotes(response);
      setIsLoading(false);
    });
  })

  function renderPendingQuotes() {
    return quotes.map(({ id, name, destination, price }, index) => (
      <tr key={ index }>
        <td>
          { id }
        </td>
        <td>
          { name }
        </td>
        <td>
          { destination }
        </td>
        <td>
          { price }
        </td>
      </tr>
    ));
  }

  return (
    <section className="container-pendingQuotes">
      <div className="pendingQuotes-title">
        <img src={ IconHistory } alt="Pending Quotes" width={'50px'}/>
        <h4>Pending Quotes</h4>
      </div>
      <hr></hr>
      <table>
        <tr>
          <th width={'120px'}>Id</th>
          <th width={'130px'}>Name</th>
          <th width={'140px'}>Destina..</th>
          <th width={'100px'}>Price</th>
        </tr>
        { !isLoading && renderPendingQuotes()}
      </table>
    </section>
  )
}
