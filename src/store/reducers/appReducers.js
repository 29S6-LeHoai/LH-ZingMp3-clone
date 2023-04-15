import actionTypes from '~/store/actions/actionTypes';

const intState = {
    banner: [],
};
const appReducer = (state = intState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find((item) => item.sectionType === 'banner') || null,
            };

        default:
            return state;
    }
};
export default appReducer;
