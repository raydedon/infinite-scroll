import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from '../actions/commonAction';

const initialState = { authenticated: true, loading: false };

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
    default:
      return state;
  }
};

export default authReducer;
