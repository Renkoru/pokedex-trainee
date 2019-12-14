import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import trainerReducer from './trainerReducer';

export default combineReducers({
  main: mainReducer,
  trainer: trainerReducer,
});
