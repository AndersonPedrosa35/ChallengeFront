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
      <div><h1>Pending Quotes</h1></div>
      <table>
        <tr>
          <th width={'120px'}>Id</th>
          <th width={'120px'}>Name</th>
          <th width={'120px'}>Destenation</th>
          <th width={'120px'}>Price</th>
        </tr>
        {renderPendingQuotes()}
      </table>
    </section>
  )
}
