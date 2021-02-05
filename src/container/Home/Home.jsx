import React from 'react';
import { Row, Col, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Columns from '../../components/Columns/Columns'
import TicketModal from '../../components/TicketModal/TicketModal';
import Card from '../../components/Card/Card';
import WarningModal from '../../components/WarningModal/WarningModal';
import {
  openTicketModal,
  closeTicketModal,
  changeForm,
  saveTicket,
  closeTicketModalEdit,
  openTicketModalEdit,
  closeWarningModal,
} from '../../redux/Home/Home.action';


function HomeScreen() {
  const dispatch = useDispatch();

  const {
    showModal,
    tickets,
    form,
    showModalEdit,
    ticketId,
    showModalWarning,
    changedState,
  } = useSelector(state => ({
    showModal: state.home.showModal,
    tickets: state.home.tickets,
    form: state.home.form,
    showModalEdit: state.home.showModalEdit,
    ticketId: state.home.ticketId,
    showModalWarning: state.home.showModalWarning,
    changedStat: state.home.changedState,
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
              id="open"
              title='Abertos'
              tickets={tickets}
            >
              {tickets.map(value => {
                return (
                  value.status === 'open' && (
                    <Card
                      key={value.id}
                      id={value.id}
                      ticket={value}
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value.id))}
                      draggable='true'
                    />
                  )
                )
              })}
            </Columns>
          </Col>
          <Col span={6}>
            <Columns
              id="executed"
              title='Executados'
              tickets={tickets}
            >
              {tickets.map(value => {
                return (
                  value.status === 'executed' && (
                    <Card
                      ticket={value}
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value.id))}
                      draggable='true'
                    />
                  )
                )
              })}
            </Columns>
          </Col>
          <Col span={6}>
            <Columns
              id='inspected'
              title='Vistoriados'
              tickets={tickets}
            >
              {tickets.map(value => {
                return (
                  value.status === 'inspected' && (
                    <Card
                      ticket={value}
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value.id))}
                      draggable='true'
                    />
                  )
                )
              })}
            </Columns>
          </Col>
          <Col span={6}>
            <Columns
              id='archived'
              title='Arquivados'
              tickets={tickets}
            >
              {tickets.map(value => {
                return (
                  value.status === 'archived' && (
                    <Card
                      ticket={value}
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value.id))}
                      draggable='true'
                    />
                  )
                )
              })}
            </Columns>
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

      {showModalWarning && (
        <WarningModal
          closeWarningModal={() => dispatch(closeWarningModal())}
          id={ticketId}
          selectedTicket={selectedTicket}
          tickets={tickets}
          status={changedState}
        />
      )}
    </div>
  );
}

export default HomeScreen;