import React from "react";
import { Nav } from "react-bootstrap";
import IconChart2 from '../assets/icons/IconChart2.svg';
import homeIcon from '../assets/icons/homeIcon.svg';
import IconDoc from '../assets/icons/IconDoc.svg';
import IconLeads from '../assets/icons/IconLeads.svg';
import IconMoney from '../assets/icons/IconMoney.svg';
import IconPlane from '../assets/icons/IconPlane.svg';
import IconConfig from '../assets/icons/IconConfig.svg';
// import IconMail from '../assets/icons/IconMail.svg';
import IconSupport from '../assets/icons/IconSupport.svg';
// import IconArrow from '../assets/icons/IconArrow.svg';
// import IconChart from '../assets/icons/IconChart.svg';
// import IconFullScreen from '../assets/icons/IconFullScreen.svg';
// import IconHandshake from '../assets/icons/IconHandshake.svg';
// import IconHistory from '../assets/icons/IconHistory.svg';
// import IconChat from '../assets/icons/IconChat.svg';
// import IconReload from '../assets/icons/IconReload.svg';
import IconTeam from '../assets/icons/IconTeam.svg';
// import IconSearch from '../assets/icons/IconSearch.svg';


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
          <h3>Home</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Quotes">
          <img src={ IconMoney } alt="Quotes" width={'50px'} />
          <h3>Quotes</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Leads">
          <img src={ IconLeads } alt="Leads" width={'50px'} />
          <h3>Leads</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Tours">
          <img src={ IconPlane } alt="Tours" width={'50px'} />
          <h3>Tours</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Invoices">
          <img src={ IconDoc } alt="Invoices" width={'50px'} />
          <h3>Invoices</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Analytics">
          <img src={ IconChart2 } alt="Analytics" width={'50px'} />
          <h3>Analytics</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Team">
          <img src={ IconTeam } alt="Team" width={'50px'} />
          <h3>Team</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Admin">
          <img src={ IconConfig } alt="Admin" width={'50px'} />
          <h3>Admin</h3>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Support">
          <img src={ IconSupport } alt="Support" width={'50px'} />
          <h3>Support</h3>
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