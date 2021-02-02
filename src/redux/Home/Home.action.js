export const HOME_OPEN_TICKET_MODAL = 'HOME_OPEN_TICKET_MODAL';
export const HOME_CLOSE_TICKET_MODAL = 'HOME_CLOSE_TICKET_MODAL';
export const HOME_CHANGE_FORM = 'HOME_CHANGE_FORM';
export const HOME_SAVE_TICKET = 'HOME_SAVE_TICKET';

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
