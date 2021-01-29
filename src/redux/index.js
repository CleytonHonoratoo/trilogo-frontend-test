import { combineReducers } from 'redux';

import Home from './HomeScreen/HomeScreen.reducer';

const rootReducer = combineReducers({
  home: Home,
});

export default rootReducer;