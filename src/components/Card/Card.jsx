import React from 'react';
import { Menu, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import { TicketTypeDict } from '../../utils/TicketType';
import './Card.scss';

const  actionTicket = (openTicketModalEdit) => {
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => openTicketModalEdit()}
      >
        Editar
      </Menu.Item>
      <Menu.Item
        onClick={() => alert('Excluir ticket pai')}
      >
        Excluir
      </Menu.Item>
    </Menu>  
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <EllipsisOutlined style={{ fontSize: '30px'}} />
    </Dropdown>
  );
}

const Card = ({
  ticket,
  openTicketModalEdit,
}) => (
    <div className='card'>
      <div className='ticketType'>
        <span>{TicketTypeDict[ticket.type]}</span>
      </div>
      <div className='ticketDescription'>
      <span className='id'>{ticket.id}</span>
        <span className='description'>{ticket.description}</span>
      </div>
      <div className='ticketResponsible'>
        <span>{ticket.responsible}</span>
        {actionTicket(openTicketModalEdit)}
      </div>
    </div>
);

export default Card;
