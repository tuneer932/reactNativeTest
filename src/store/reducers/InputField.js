import * as actionTypes from '../actions/actionTypes';
import updateState from '../../utils/updateState';

const initialState = {
    enteredValue: '',
};

export default (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case actionTypes.SET_INPUT_VALUE:
            return updateState(state, { enteredValue: payload });

        default:
            return state;
    }
};
