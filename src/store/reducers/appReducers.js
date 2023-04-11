import actionTypes from '~/store/action/actionTypes';

const intState = {
    homeData: [],
    test: '1234',
};
const appReducer = (state = intState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return state;

        default:
            return state;
    }
};
export default appReducer;
