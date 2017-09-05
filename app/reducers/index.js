import { combineReducers } from 'redux';

import salesReducer from './sales.app.reducer';
import approachReducer from './approach.reducer';

const reducers = combineReducers({
    salesReducer: salesReducer,
    approachReducer: approachReducer
});

export default reducers;