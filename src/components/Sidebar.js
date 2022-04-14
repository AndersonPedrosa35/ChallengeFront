import React from "react";
import { Nav } from "react-bootstrap";
import IconChart2 from '../assets/icons/IconChart2.svg';
import homeIcon from '../assets/icons/homeIcon.svg';
import IconDoc from '../assets/icons/IconDoc.svg';
import IconLeads from '../assets/icons/IconLeads.svg';
import IconMoney from '../assets/icons/IconMoney.svg';
import IconPlane from '../assets/icons/IconPlane.svg';
import IconConfig from '../assets/icons/IconConfig.svg';
import IconSupport from '../assets/icons/IconSupport.svg';
import IconTeam from '../assets/icons/IconTeam.svg';

export default function SideBar() {
  return (
    <>
      <Nav className="sidebar"
        activeKey="/home"
        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
      <Nav.Item>
        <Nav.Link href="/home">
          <img src={ homeIcon } alt="Home" width={'50px'} />
          <h5>Home</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Quotes">
          <img src={ IconMoney } alt="Quotes" width={'50px'} />
          <h5>Quotes</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Leads">
          <img src={ IconLeads } alt="Leads" width={'50px'} />
          <h5>Leads</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Tours">
          <img src={ IconPlane } alt="Tours" width={'50px'} />
          <h5>Tours</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Invoices">
          <img src={ IconDoc } alt="Invoices" width={'50px'} />
          <h5>Invoices</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Analytics">
          <img src={ IconChart2 } alt="Analytics" width={'50px'} />
          <h5>Analytics</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Team">
          <img src={ IconTeam } alt="Team" width={'50px'} />
          <h5>Team</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Admin">
          <img src={ IconConfig } alt="Admin" width={'50px'} />
          <h5>Admin</h5>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Support">
          <img src={ IconSupport } alt="Support" width={'50px'} />
          <h5>Support</h5>
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