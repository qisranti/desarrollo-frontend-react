import { combineReducers } from 'redux';
import defaultReducers from './default/defaultReducers';


const reducers = combineReducers({
    default: defaultReducers
});

export default reducers;