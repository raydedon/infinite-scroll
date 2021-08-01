import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './authReducer';
import imagesReducer from '../components/homeBody/imagesReducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    userDetails: authReducer,
    images: imagesReducer
});

export default rootReducer;
