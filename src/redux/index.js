import { combineReducers } from 'redux';

import Home from './Home/Home.reducer';

const rootReducer = combineReducers({
  home: Home,
});

export default rootReducer;