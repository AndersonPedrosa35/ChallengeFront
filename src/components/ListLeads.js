import React, { useContext, useEffect, useState } from 'react';
import IconLeads from '../assets/icons/IconLeads.svg';
import { Context } from '../context/context';
import { getLeads } from '../utils/Api';

export default function ListLeads() {
  let section = 'section';
  let container = 'container';
  const [isLoading, setIsLoading] = useState(true);
  const { leads, setLeads } = useContext(Context);

  useEffect(() => {
    getLeads().then((response) => {
      setLeads(response);
      setIsLoading(false);
    });
  }, []);

  function renderLeads() {
    return leads.map(({ name, message, self, hours }, index) => (
      <div key={ index } role={section} aria-label='containerInfoLead' className='container-eachLead'>
        <img className="img-lead" src={ self } alt="Lead" />
        <div role={container}><strong>{ name }</strong><span>{ message }</span></div>
        <span className='hours'>{ hours }</span>
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
      { !isLoading && renderLeads() }
    </section>
  )
}
