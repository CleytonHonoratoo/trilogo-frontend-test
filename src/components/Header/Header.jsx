import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import './Header.scss'


function Header({ openTicketModal }) {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <Button
        className="btn"
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => openTicketModal()}
      >
        Novo ticket
      </Button>
    </div>
  )
}

export default Header;