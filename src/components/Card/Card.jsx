import React, { useCallback } from 'react';
import { Menu, Dropdown } from 'antd';
import { useDispatch } from 'react-redux'
import { EllipsisOutlined } from '@ant-design/icons';

import { TicketTypeDict } from '../../utils/TicketType';
import { selectedTicket } from '../../redux/Home/Home.action';

import './Card.scss';

function Card({
  ticket,
  openTicketModalEdit,
  draggable,
}) {

  const newStatusMove = status => {
    switch (status) {
      case 'open':
        return 'executed';
      case 'executed':
        return 'inspected';
      case 'inspected':
        return 'archived';
      default:
        return 'open';
    }
  }

  const dispatch = useDispatch();

  const dragStart = (event) => {
    const { target } = event;
    const status = newStatusMove(ticket.status);
    console.log('target: ', target);
    console.log('status: ', status);

    dispatch(selectedTicket(ticket.id))

    event.dataTransfer.setData('ticketId', target.id);
    event.dataTransfer.setData('status', status);
  }

  const dragOver = useCallback(event => {
    event.stopPropagation();
  }, []);

  const  actionTicket = () => {
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

  return (
    <div
      id={ticket.id}
      className='card'
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <div className='ticketType'>
        <span>{TicketTypeDict[ticket.type]}</span>
      </div>

      <div className='ticketDescription'>
       <span className='id'>{ticket.id}</span>
        <span className='description'>{ticket.description}</span>
      </div>

      <div className='ticketResponsible'>
        <span>{ticket.responsible}</span>
        {actionTicket()}
      </div>

    </div>
  )
}

export default Card;
