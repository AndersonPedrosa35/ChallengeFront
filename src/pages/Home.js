import React, { useContext } from 'react';
import Header from '../components/Header';
import Revenue from '../components/Revenue';
import SideBar from '../components/Sidebar';
import { Context } from '../context/context';
import '../css/Home.css';

export default function Home() {
  const { isOpen } = useContext(Context);
  return (
    <div>
      <Header />
      <section>
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
              <img src={require('../assets/Background.png')} alt=""/>
              <div>
                <p><h2>101</h2><span>NEW LEADS</span></p>
                <p><h2>35</h2><span>QUOTES CREATED</span></p>
                <p><h2>40</h2><span>PENDING ORDERS</span></p>
              </div>
              </section>
            </div>
          </section>
          <section className="section-quotes">
            <div className="container-quotes">
              
            </div>
          </section>
          <section>
            <Revenue />
          </section>
        </div>
      </section>
      
    </div>
  )
}
