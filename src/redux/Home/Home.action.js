export const HOME_OPEN_TICKET_MODAL = 'HOME_OPEN_TICKET_MODAL';
export const HOME_CLOSE_TICKET_MODAL = 'HOME_CLOSE_TICKET_MODAL';
export const HOME_CHANGE_FORM = 'HOME_CHANGE_FORM';
export const HOME_SAVE_TICKET = 'HOME_SAVE_TICKET';
export const HOME_OPEN_TICKET_MODAL_EDIT = 'HOME_OPEN_TICKET_MODAL_EDIT';
export const HOME_CLOSE_TICKET_MODAL_EDIT = 'HOME_CLOSE_TICKET_MODAL_EDIT';
export const HOME_NEW_TICKETS = 'HOME_NEW_TICKETS';
export const HOME_OPEN_WARNING_MODAL = 'HOME_OPEN_WARNING_MODAL';
export const HOME_SELECT_TICKET = 'HOME_SELECT_TICKET';
export const HOME_CLOSE_WARNING_MODAL = 'HOME_CLOSE_WARNING_MODAL';
export const HOME_SET_BASE_64 = 'HOME_SET_BASE_64';
export const HOME_DELETE_TICKET = 'HOME_DELETE_TICKET';
export const HOME_EDIT_TICKET = 'HOME_EDIT_TICKET';

export function openTicketModal() {
  return { type: HOME_OPEN_TICKET_MODAL };
}

export function closeTicketModal() {
  return { type: HOME_CLOSE_TICKET_MODAL };
}

export function changeForm(value) {
  return {
    type: HOME_CHANGE_FORM,
    payload: value,
  };
}

export function saveTicket(form) {
  return { 
    type: HOME_SAVE_TICKET,
    payload: form,
  };
}

export function setBase64(data) {
  return {
    type: HOME_SET_BASE_64,
    payload: data,
  }
}

export function openTicketModalEdit(ticket) {
  console.log('ticket: ', ticket)
  return {
    type: HOME_OPEN_TICKET_MODAL_EDIT,
    payload: ticket,
  }
}

export function closeTicketModalEdit() {
  return {
    type: HOME_CLOSE_TICKET_MODAL_EDIT,
  }
}

export function openWarningModal(status) {
  return {
    type: HOME_OPEN_WARNING_MODAL,
    payload: status,
  }
}

export function closeWarningModal() {
  return {
    type: HOME_CLOSE_WARNING_MODAL,
  }
}

export function newTickets(tickets) {
  return {
    type: HOME_NEW_TICKETS,
    payload: tickets,
  }
}

export function selectedTicket(ticketId) {
  return {
    type: HOME_SELECT_TICKET,
    payload: ticketId,
  }
}

export function deleteTicket(tickets) {
  return {
    type: HOME_DELETE_TICKET,
    payload: tickets,
  }
}

export function editTicket(ticket) {
  return {
    type: HOME_EDIT_TICKET,
    payload: ticket,
  }
}