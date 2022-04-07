import React from 'react';

export default function ListLeads() {
  function renderLeads() {
    return [1, 2, 3].map((item, index) => (
      <div key={ index }>
        <img src="" alt=""/>
        <span><strong>Jane Smith</strong> Hey! I want to place my package</span>
        <span>13:40 PM</span>
      </div>
    ));
  }
  return (
    <section>
      <div>
        <h3>New Leads</h3>
      </div>
      { renderLeads() }
    </section>
  )
}
