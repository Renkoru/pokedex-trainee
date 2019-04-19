import React, { useState, useContext } from 'react';
import { createStore } from 'redux';

import trainerReducer from './reducer';

const rstore = createStore(trainerReducer);

export default rstore;
