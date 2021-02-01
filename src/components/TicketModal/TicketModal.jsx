import React from 'react';
import { Modal, Input, Select } from 'antd';
 
import Field from '../Field/Field'
import { TicketType, TicketTypeDict } from '../../utils/TicketType';
import './TicketModal.scss'

function TicketModal({closeTicketModal}) {
  const { Option } = Select;

  return (
    <Modal
      title="Novo Ticket"
      visible
      onOk={console.log('teste')}
      onCancel={() => closeTicketModal()}
      className='TicketModal'
    >
      <Field label='Descrição' required>
        <Input />
      </Field>

      <Field label='Tipo' required>
        <Select style={{ width: '100%' }}>
          <Option value={TicketType.Procedure}>{TicketTypeDict[TicketType.Procedure]}</Option>
          <Option value={TicketType.Asset}>{TicketTypeDict[TicketType.Asset]}</Option>
          <Option value={TicketType.Building}>{TicketTypeDict[TicketType.Building]}</Option>
        </Select>
      </Field>

      <Field label='Responsável' required>
        <Select style={{ width: '100%' }}>
          <Option value={TicketType.Procedure}>{TicketTypeDict[TicketType.Procedure]}</Option>
          <Option value={TicketType.Asset}>{TicketTypeDict[TicketType.Asset]}</Option>
          <Option value={TicketType.Building}>{TicketTypeDict[TicketType.Building]}</Option>
        </Select>
      </Field>

      <Field label='Imagem'>
        <Input />
      </Field>
    </Modal>
  )
}

export default TicketModal;