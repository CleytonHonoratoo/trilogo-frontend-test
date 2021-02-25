import React, { useEffect } from 'react';
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
  setBase64,
  deleteTicket,
  newTickets,
  editTicket,
} from '../../redux/Home/Home.action';
import { getBase64 } from '../../utils/getBase64';


function HomeScreen() {
  useEffect(() => {
    const getTickets = localStorage.getItem('tickets');

    if (getTickets) {
      dispatch(newTickets(JSON.parse(getTickets)))
    }
  }, []);

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

  const setBase = (image) => {
    dispatch(setBase64(image))
  }

  const addFile = (file) => {
    console.log('file', file)
    const archive = {
      name: file.name,
      uid: file.uid,
      type: file.type,
    };

    handleForm({ files: [...form.files, archive] });
    getBase64(file, image => setBase(image));
    return false;
  };

  const removeFile = (file) => {
    const index = form.files.findIndex(i => i.uid === file.uid);

    if (index > -1) {
      return handleForm({ files: [...form.files.slice(0, index), ...form.files.slice(index + 1)]});
    }

    return false;
  };

  const removeTicket = (id) => {
    const removedTicket = tickets.filter(value =>  value.id !== id);

    localStorage.setItem('tickets', JSON.stringify(removedTicket));
    dispatch(deleteTicket(removedTicket));
  }

  const createTicket = () => {
    if (!form.description) {
      message.warning('Descrição é obrigatória');
    }
    const id = (Math.random() * ("9999" - "0000") + "0000").split('.')[0];
    localStorage.setItem('tickets', JSON.stringify([...tickets, {...form, id}])); // criando localStorage
    dispatch(saveTicket([...tickets, {...form, id}]))
  }

  const handleEditTicket = () => {
    const editedTicket = tickets.map(item => {
      if (item.id === ticketId) {
       return {...item, ...form}
      };

      return item;
    })

    dispatch(editTicket(editedTicket))
  }

  const selectedTicket = tickets.filter(value => value.id === ticketId)[0];

  const uploadProps = {
    onRemove: removeFile,
    beforeUpload: addFile,
    fileList: form.files,
  };

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
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value))}
                      draggable='true'
                      deleteTicket={removeTicket}
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
                      key={value.id}
                      id={value.id}
                      ticket={value}
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value))}
                      draggable='true'
                      deleteTicket={removeTicket}
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
                      key={value.id}
                      id={value.id}
                      ticket={value}
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value))}
                      draggable='true'
                      deleteTicket={removeTicket}
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
                      key={value.id}
                      id={value.id}
                      ticket={value}
                      openTicketModalEdit={() => dispatch(openTicketModalEdit(value))}
                      draggable='true'
                      deleteTicket={removeTicket}
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
          uploadProps={uploadProps}
        />
      )}

      {showModalEdit && (
        <TicketModal
          closeTicketModal={() => dispatch(closeTicketModalEdit())}
          handleForm={handleForm}
          saveTicket={createTicket}
          editTicket={handleEditTicket}
          editionMode
          ticket={form}
          uploadProps={uploadProps}
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