import React, { useContext, useEffect, useState } from 'react';
import IconChat from '../assets/icons/IconChat.svg';
import IconChat2 from '../assets/icons/IconChat2.svg';
import { Context } from '../context/context';
import { getEmployees } from '../utils/Api';

export default function Chat() {
  const [isLoading, setIsLoading] = useState(true);
  const { employees, setEmployees } = useContext(Context);

  useEffect(() => {
    getEmployees().then((response) => {
      setEmployees(response);
      setIsLoading(false);
    });
  }, []);

  function renderLeadInChat() {
    return employees.map(({ name, job, self, status }, index) => (
      <div className="container-chat-item" key={ index }>
        <img className="img-lead" src={ self } alt="Employee" />
        <div className="chat-item-name">
          <h5>{ name }</h5>
          <span>{ job }<br></br>{ status }</span>
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
      { !isLoading && renderLeadInChat() }
    </section>
  )
}
