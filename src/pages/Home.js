import React, { useContext, useEffect } from 'react';
import Chat from '../components/Chat';
import CreateQuotes from '../components/CreateQuotes';
import Header from '../components/Header';
import ListLeads from '../components/ListLeads';
import PendingQuotes from '../components/PendingQuotes';
import PopularDestinations from '../components/PopularDestinations';
import PotentialRevenue from '../components/PotentialRevenue';
import Revenue from '../components/Revenue';
import SideBar from '../components/Sidebar';
import { Context } from '../context/context';
import { createStorage } from '../utils/localStorage';
import '../css/Home.css';

export default function Home({ testing }) {
  const { isOpen, leads, quotes } = useContext(Context);
  const { REACT_APP_MAPBOX_TOKEN } = process.env;

  useEffect(() => {
    createStorage('user', { name: 'John Doe', email: 'teste.teste@gmail.com', token: '1234567' })
  }, []);
  return (
    <div>
      <Header />
      <section className='dashboard'>
        { isOpen && (
          <div className='column-left'>
            <section className='container-Sidebar'>
              <SideBar />
            </section>
          </div>
        ) }
        <div className='column-right'>
          <section className="section-firstBanner">
            <div className="container-firstBanner">
              <section className="text-firstBanner">
                <h1>Welcome to your dashboard</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and 
                more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
                </p>
              </section>
              <section className="info-firstBanner">
              <img src={require('../assets/Background.png')} alt="hero-background"/>
              <div>
                <section><h2>{ leads.length }</h2><span>NEW LEADS</span></section>
                <section><h2>{ quotes.length }</h2><span>QUOTES CREATED</span></section>
                <section><h2>{ quotes.length }</h2><span>PENDING ORDERS</span></section>
              </div>
              </section>
            </div>
          </section>
          <section className="section-quotes">
            <div className="container-quotes">
              <CreateQuotes />
              <PendingQuotes />
              <ListLeads />
            </div>
          </section>
          <section className="container-maps">
            { !testing && 
              <PopularDestinations accessToken={ REACT_APP_MAPBOX_TOKEN } zoom={ -0.00001 } /> }
            <Chat />
          </section>
          { !testing && (
          <section className="container-grafics">
             <Revenue /> 
            <PotentialRevenue />
          </section>
          )}
        </div>
      </section>
      
    </div>
  )
}
