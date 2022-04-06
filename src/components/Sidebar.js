import React from "react";
import { Nav } from "react-bootstrap";
import { homeIcon,
  IconChart2, IconConfig, IconDoc, IconLeads, 
  IconMail, IconMoney, IconPlane, IconSupport, 
  IconTeam } from '../assets/icons/menuIcons.js';

export default function SideBar() {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link href="/home">
          <img src={ homeIcon } alt="Home" />
          <h3>Home</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Quotes">
          <img src={ IconMoney } alt="Quotes" />
          <h3>Quotes</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Leads">
          <img src={ IconLeads } alt="Leads" />
          <h3>Leads</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Tours">
          <img src={ IconPlane } alt="Tours" />
          <h3>Leads</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Invoices">
          <img src={ IconDoc } alt="Invoices" />
          <h3>Leads</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Analytics">
          <img src={ IconChart2 } alt="Analytics" />
          <h3>Leads</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Team">
          <img src={ IconLeads } alt="Teams" />
          <h3>Leads</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <img src={ IconLeads } alt="Leads" />
          <h3>Leads</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
      </Nav>
    </>
  );
};