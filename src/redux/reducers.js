import { combineReducers } from 'redux';
import defaultReducers from './default/defaultReducers';
import productReducers from './products/productReducers';


const reducers = combineReducers({
    default: defaultReducers,
    products: productReducers
});

export default reducers;