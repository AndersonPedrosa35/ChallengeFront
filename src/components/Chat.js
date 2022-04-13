import React from 'react';
import IconChat from '../assets/icons/IconChat.svg';
import IconChat2 from '../assets/icons/IconChat2.svg';

export default function Chat() {

  function renderLeadInChat() {
    let array = [1, 2, 3, 4];
    return array.map((item) => (
      <div className="container-chat-item">
        <img src="" alt="" />
        <div className="chat-item-name">
          <h5>Juh Abdecam</h5>
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
