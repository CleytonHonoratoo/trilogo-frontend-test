import * as actions from './Home.action';

const defaultForm = {
  id: '6329',
  status: 'open',
  description: 'teste',
  type: 3,
  responsible: "Cleyton Honorato",
  file: [],
}

const initialState = () => ({
  showModal: false,
  showModalEdit: false,
  showModalWarning: false,
  changedState: null,
  tickets: [
    {
      id: '6329',
      status: 'open',
      description: 'teste',
      type: 3,
      responsible: "Cleyton Honorato",
      file: [],
    },
    {
      id: '6532',
      status: 'open',
      description: 'teste',
      type: 3,
      responsible: "Cleyton Honorato",
      file: [],
    }
  ],
  form: defaultForm,
  ticketId: null,
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
    case actions.HOME_OPEN_TICKET_MODAL_EDIT:
      return {
        ...state,
        showModalEdit: true,
        ticketId: action.payload,
      }
    case actions.HOME_CLOSE_TICKET_MODAL_EDIT:
      return {
        ...state,
        showModalEdit: false,
        ticketId: null,
      }
    case actions.HOME_OPEN_WARNING_MODAL:
      return {
        ...state,
        showModalWarning: true,
        changedState: action.payload,
      };
    case actions.HOME_CLOSE_WARNING_MODAL:
      return {
        ...state,
        showModalWarning: false,
      }
    case actions.HOME_SELECT_TICKET:
      return {
        ...state,
        ticketId: action.payload,
      }
    case actions.HOME_NEW_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        showModalWarning: false,
      }
    default:
      return state;
  }
}