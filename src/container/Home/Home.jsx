import React, { useState } from 'react';
import { Row, Col, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Columns from '../../components/Columns/Columns'
import TicketModal from '../../components/TicketModal/TicketModal';
import Card from '../../components/Card/Card';
import {
  openTicketModal,
  closeTicketModal,
  changeForm,
  saveTicket,
  closeTicketModalEdit,
  openTicketModalEdit,
} from '../../redux/Home/Home.action';


function HomeScreen() {
  const dispatch = useDispatch();

  const {
    showModal,
    tickets,
    form,
    showModalEdit,
    ticketId,
  } = useSelector(state => ({
    showModal: state.home.showModal,
    tickets: state.home.tickets,
    form: state.home.form,
    showModalEdit: state.home.showModalEdit,
    ticketId: state.home.ticketId,
  }));

  const handleForm = (value) => {
    dispatch(changeForm({ ...form, ...value }));
  };

  const createTicket = () => {
    if (!form.description) {
      message.warning('Descrição é obrigatória');
    }
    const id = (Math.random() * ("9999" - "0000") + "0000").split('.')[0];
    dispatch(saveTicket([...tickets, {...form, id}]))
  }

  const selectedTicket = tickets.filter(value => value.id === ticketId)[0];

  return (
    <div className='container'>
      <Header
        openTicketModal={() => dispatch(openTicketModal())}
      />
      <div className='section'>
        <Row>
          <Col span={6}>
            <Columns
              title='Aberto'
              status='open'
            >
              {tickets.map(value => (
                <Card
                  ticket={value}
                  openTicketModalEdit={() => dispatch(openTicketModalEdit(value.id))}
                />
              ))}
            </Columns>
          </Col>
          <Col span={6}>
            <Columns
              title='Executado'
              status='executed'
            />
          </Col>
          <Col span={6}>
            <Columns
              title='Vistoriado'
              status='inspect'
            />
          </Col>
          <Col span={6}>
            <Columns
              title='Arquivados'
              status='archived'
            />
          </Col>
        </Row>
      </div>

      {showModal && (
        <TicketModal
          closeTicketModal={() => dispatch(closeTicketModal())}
          handleForm={handleForm}
          saveTicket={createTicket}
        />
      )}

      {showModalEdit && (
        <TicketModal
          closeTicketModal={() => dispatch(closeTicketModalEdit())}
          handleForm={handleForm}
          saveTicket={createTicket}
          editionMode
          ticket={selectedTicket}
        />
      )}
    </div>
  );
}

export default HomeScreen;