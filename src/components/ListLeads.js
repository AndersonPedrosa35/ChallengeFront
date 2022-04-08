import React from 'react';

export default function ListLeads() {
  function renderLeads() {
    return [1, 2, 3].map((item, index) => (
      <div key={ index }>
        <img src="" alt=""/>
        <div><strong>Jane Smith</strong><span>Hey! I want to place my package</span></div>
        <span>13:40 PM</span>
      </div>
    ));
  }
  return (
    <section className='container-listLeads'>
      <div>
        <h4>New Leads</h4>
      </div>
      { renderLeads() }
    </section>
  )
}
