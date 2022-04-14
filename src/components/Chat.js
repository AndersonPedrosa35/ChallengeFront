import React from 'react';
import IconChat from '../assets/icons/IconChat.svg';
import IconChat2 from '../assets/icons/IconChat2.svg';

export default function Chat() {

  function renderLeadInChat() {
    let array = [1, 2, 3, 4];
    return array.map((item) => (
      <div className="container-chat-item">
        <img className="img-lead" src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x" alt="Lead" />
        <div className="chat-item-name">
          <h5>Jane Smith</h5>
          <span>Customer service available</span>
        </div>
        <img src={IconChat2} alt="chat" />
      </div>
    ))
  }
  return (
    <section className="container-chat">
      <div className="chat-title">
        <img src={IconChat} alt="Chat" width={"50px"}/>
        <h4>Team chat</h4>
      </div>
      <hr></hr>
      { renderLeadInChat() }
    </section>
  )
}
