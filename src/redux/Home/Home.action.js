export const HOME_OPEN_TICKET_MODAL = 'HOME_OPEN_TICKET_MODAL';
export const HOME_CLOSE_TICKET_MODAL = 'HOME_CLOSE_TICKET_MODAL';


export function openTicketModal() {
  return { type: HOME_OPEN_TICKET_MODAL };
}

export function closeTicketModal() {
  return { type: HOME_CLOSE_TICKET_MODAL };
}
