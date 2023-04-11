import appReducers from './appReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    app: appReducers,
});

export default rootReducer;
