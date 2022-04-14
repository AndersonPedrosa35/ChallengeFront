import React from 'react';
import IconHistory from '../assets/icons/IconHistory.svg';

export default function PendingQuotes() {
  
  function renderPendingQuotes() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
      <tr key={ index }>
        <td>
          teste
        </td>
        <td>
          teste
        </td>
        <td>
          teste
        </td>
        <td>
          teste
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
        {renderPendingQuotes()}
      </table>
    </section>
  )
}
