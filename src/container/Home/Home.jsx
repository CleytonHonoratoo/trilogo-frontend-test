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
} from '../../redux/Home/Home.action';


function HomeScreen() {
  const dispatch = useDispatch();

  const {
    showModal,
    tickets,
    form,
  } = useSelector(state => ({
    showModal: state.home.showModal,
    tickets: state.home.tickets,
    form: state.home.form,
  }));

  const handleForm = (value) => {
    dispatch(changeForm({ ...form, ...value }));
  };

  const createTicket = () => {
    if (!form.description) {
      message.warning('Descrição é obrigatória');
    }

    dispatch(saveTicket([...tickets, form]))
  }

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
              {tickets.length ? (
                <Card
                  type={form.type}
                  description={form.description}
                  responsible={form.responsible}
                />
              ) : ''}
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
          editionMode={false}
          handleForm={handleForm}
          saveTicket={createTicket}
        />
      )}
    </div>
  );
}

export default HomeScreen;