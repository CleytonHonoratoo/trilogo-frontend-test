import React from 'react';
import { Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { newTickets } from '../../redux/Home/Home.action';

import './WarningModal.scss';

function WarningModal(props) {
  const { id, selectedTicket, closeWarningModal, tickets } = props;

  const { changedState } = useSelector(state => ({
    changedState: state.home.changedState,
  }));

  const dispatch = useDispatch();

  const columnTitle = () => {
    switch (selectedTicket.status) {  
      case 'open':
        return ' executados';
      case 'executed':
        return ' vistoriados';
      case 'inspected':
        return ' arquivados';
      default:
        return 'abertos';
    }
  }

  const changeStatusTicket = () => {
    const newHistoryTickets = tickets.map(item => {
      if (item.id === id) {
       return {...item, status: changedState}
      };

      return item;
    })
    localStorage.setItem('tickets', JSON.stringify(newHistoryTickets)); // atualizando localStorage
    dispatch(newTickets(newHistoryTickets));
  }

  return (
    <Modal
      className="warningModal"
      title="Alterar Status"
      visible
      footer={[
        <Button key="submit" onClick={() => changeStatusTicket()} className='btn cancel'>
          Cancelar
        </Button>,
        <Button key="submit" onClick={() => changeStatusTicket()} className='btn'>
          Mover ticket
        </Button>,
      ]}
    >
      <span>
        Você tem certeza que deseja mover o ticket
        <span style={{ color: '#4C12A1' }}>{` ${id} `}</span>
        para a coluna de
        <span style={{ color: '#D4662D' }}>{columnTitle()}</span>?
      </span>
    </Modal>
  ); 
}

export default WarningModal;