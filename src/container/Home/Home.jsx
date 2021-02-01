import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import Header from '../../components/Header/Header';
import Columns from '../../components/Columns/Columns'
import TicketModal from '../../components/TicketModal/TicketModal';
import {
  openTicketModal,
  closeTicketModal,
} from '../../redux/Home/Home.action';


function HomeScreen() {
  const dispatch = useDispatch();

  const { showModal } = useSelector(state => ({
    showModal: state.home.showModal,
  }));

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
            />
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
        />
      )}
    </div>
  );
}

export default HomeScreen;