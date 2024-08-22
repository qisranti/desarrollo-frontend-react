import { combineReducers } from 'redux';
import defaultReducers from './default/defaultReducers';
import productReducers from './products/productReducers';
import formReducer from './form/formReducer';


const reducers = combineReducers({
    default: defaultReducers,
    products: productReducers,
    form: formReducer
});

export default reducers;