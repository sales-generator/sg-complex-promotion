import {SET_APPROACH_ITEM} from '../actions/index'

const initialState = {
    approachItem: 0
};

const approachReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_APPROACH_ITEM:
            return Object.assign({}, state, {approachItem: action.payload})
    }
    return state;
};

export default approachReducer;