import React from 'react';
import { Menu, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import { TicketTypeDict } from '../../utils/TicketType';
import './Card.scss';

const  actionTicket = () => {
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => alert('Editar ticket pai')}
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
    type,
    description,
    responsible,
    file,
}) => (
    <div className='card'>
      {file && (
        <div>
          <span>imagem</span>
        </div>  
      )}
      <div className='ticketType'>
        <span>{TicketTypeDict[type]}</span>
      </div>
      <div className='ticketDescription'>
        <span className='id'>6523</span>
        <span className='description'>{description}</span>
      </div>
      <div className='ticketResponsible'>
        <span>{responsible}</span>
        {actionTicket()}
      </div>
    </div>
);

export default Card;
