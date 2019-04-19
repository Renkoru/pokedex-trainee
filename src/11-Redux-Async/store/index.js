import { createStore, combineReducers } from 'redux';

import trainer from './trainerReducer';
import main from './mainReducer';

const reducer = combineReducers({ main, trainer });

export default createStore(reducer);
