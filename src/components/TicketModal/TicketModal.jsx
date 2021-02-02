import React from 'react';
import { Modal, Input, Select, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
 
import Field from '../Field/Field'
import { TicketType, TicketTypeDict } from '../../utils/TicketType';
import './TicketModal.scss'

function TicketModal(props) {
  const { Option } = Select;
  const { Dragger } = Upload;
  const {
    closeTicketModal,
    editionMode,
    handleForm,
    saveTicket,
  } = props;

  return (
    <Modal
      title={editionMode ? "Editar ticket" : "Novo Ticket"}
      visible
      onOk={saveTicket}
      onCancel={() => closeTicketModal()}
      className="ticketModal"
    >
      <Field label='Descrição' required>
        <Input
          onChange={el => handleForm({ description: el.target.value })}
        />
      </Field>

      <Field label='Tipo' required>
        <Select
          style={{ width: '100%' }}
          onChange={value => handleForm({ type: value })}
        >
          <Option value={TicketType.Procedure}>{TicketTypeDict[TicketType.Procedure]}</Option>
          <Option value={TicketType.Asset}>{TicketTypeDict[TicketType.Asset]}</Option>
          <Option value={TicketType.Building}>{TicketTypeDict[TicketType.Building]}</Option>
        </Select>
      </Field>

      <Field label='Responsável' required>
        <Select
          style={{ width: '100%' }}
          onChange={value => handleForm({ responsible: value })}
        >
          <Option value='Cleyton'>Cleyton</Option>
          <Option value='Joel'>Joel</Option>
          <Option value='Luan'>Luan</Option>
        </Select>
      </Field>

      <Field label='Imagem'>
        <Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Arraste uma imagem para anexar ao ticket</p>
        </Dragger>,
      </Field>
    </Modal>
  )
}

export default TicketModal;