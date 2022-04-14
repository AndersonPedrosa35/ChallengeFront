import React from 'react';
import IconLeads from '../assets/icons/IconLeads.svg';

export default function ListLeads() {
  let section = 'section';
  let container = 'container';
  function renderLeads() {
    return [1, 2, 3].map((item, index) => (
      <div key={ index } role={section} aria-label='containerInfoLead' className='container-eachLead'>
        <img className="img-lead" src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x" alt="Lead" />
        <div role={container}><strong>Jane Smith</strong><span>Hey! I want to place my package</span></div>
        <span className='hours'>13:40 PM</span>
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
