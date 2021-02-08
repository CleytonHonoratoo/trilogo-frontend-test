import React from 'react';
import { Modal, Input, Select, Upload, Button } from 'antd';
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
    ticket,
    uploadProps,
    editTicket,
  } = props;

  return (
    <Modal
      title={editionMode ? "Editar Ticket" : "Novo Ticket"}
      visible
      onCancel={() => closeTicketModal()}
      className="ticketModal"
      footer={[
        <Button key="submit" onClick={editionMode ? editTicket : saveTicket} className='btn'>
          {editionMode ? "Editar Ticket" : "Criar Ticket"}
        </Button>,
      ]}
    >
      <Field label='Descrição' required>
        <Input
          onChange={el => handleForm({ description: el.target.value })}
          value={ticket && ticket.description}
        />
      </Field>

      <Field label='Tipo' required>
        <Select
          style={{ width: '100%' }}
          onChange={value => handleForm({ type: value })}
          value={ticket && ticket.type}
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
          value={ticket && ticket.responsible}
        >
          <Option value='Cleyton Honorato'>Cleyton Honorato</Option>
          <Option value='Joel Maia'>Joel Maia</Option>
          <Option value='Luan Menezes'>Luan Menezes</Option>
        </Select>
      </Field>

      <Field label='Imagem'>
        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ color: '#4C12A1' }} />
          </p>
          <p className="ant-upload-text">Arraste uma imagem para anexar ao ticket</p>
        </Dragger>
      </Field>
    </Modal>
  )
}

export default TicketModal;