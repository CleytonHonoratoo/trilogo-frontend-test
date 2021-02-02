import * as actions from './Home.action';

const defaultForm = {
  description: '',
  type: null,
  responsible: null,
  file: [],
}

const initialState = () => ({
  showModal: false,
  tickets: [],
  form: defaultForm,
});

export default function (state = initialState(), action) {
  switch (action.type) {
    case actions.HOME_OPEN_TICKET_MODAL:
      return { ...state, showModal: true };
    case actions.HOME_CLOSE_TICKET_MODAL:
      return { ...state, showModal: false };
    case actions.HOME_CHANGE_FORM:
      return {
        ...state,
        form: action.payload,
      }
    case actions.HOME_SAVE_TICKET:
      return {
        ...state,
        tickets: action.payload,
        showModal: false,
      }
    default:
      return state;
  }
}