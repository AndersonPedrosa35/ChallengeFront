import React from 'react'

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
      <div><h4>Pending Quotes</h4></div>
      <table>
        <tr>
          <th width={'120px'}>Id</th>
          <th width={'120px'}>Name</th>
          <th width={'120px'}>Destination</th>
          <th width={'120px'}>Price</th>
        </tr>
        {renderPendingQuotes()}
      </table>
    </section>
  )
}
