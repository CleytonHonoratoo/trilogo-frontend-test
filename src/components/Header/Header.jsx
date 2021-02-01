import React from 'react';
import { Button } from 'antd';
import logo from '../../images/logo.png';
import './Header.scss'


function Header({ openTicketModal }) {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <Button
        className="btn"
        type="primary"
        icon="plus"
        onClick={() => openTicketModal()}
      >
        Novo ticket
      </Button>
    </div>
  )
}

export default Header;