import * as actions from './Home.action';

const initialState = () => ({
  showModal: false
});

export default function (state = initialState(), action) {
  switch (action.type) {
    case actions.HOME_OPEN_TICKET_MODAL:
      return { ...state, showModal: true };
    case actions.HOME_CLOSE_TICKET_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
}