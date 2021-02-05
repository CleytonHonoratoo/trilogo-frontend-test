import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { newTickets } from '../../redux/Home/Home.action';

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
    const handleTicket = tickets
    .filter(value => value.id === id)
    .map((item) => ({ ...item, status: changedState }));

    const index = tickets.indexOf(value => value.id === id);
    const newHistoryTickets = tickets.splice(index, 1);

    dispatch(newTickets([...newHistoryTickets, ...handleTicket]));
  }

  return (
    <Modal
      title="Alterar Status"
      visible
      onOk={() => changeStatusTicket()}
      onCancel={() => closeWarningModal()}
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