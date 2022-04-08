import React from 'react';
import IconLeads from '../assets/icons/IconLeads.svg';

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
      <div className="listLeads-title">
        <img src={ IconLeads } alt="New Leads" width={'40px'} />
        <h4>New Leads</h4>
      </div>
      <hr></hr>
      { renderLeads() }
    </section>
  )
}
