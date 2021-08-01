import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER, RESET_REDUX_STORE,
} from '../actions/commonAction';

const initialState = { authenticated: false, loading: false };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST: {
      return {...state, authenticated: false, loading: true};
    }
    case LOGIN_USER_SUCCESS: {
      return {...state, authenticated: true, loading: false};
    }
    case LOGIN_USER_FAILURE: {
      return {...state, loading: false};
    }
    case LOGOUT_USER:
      return { authenticated: false };
    case RESET_REDUX_STORE:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
