export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
import { push } from 'connected-react-router';

export const loginUser = (cred) => {
    const loginUserRequest = () => ({
        type: LOGIN_USER_REQUEST,
    });
    const loginUserSuccess = () => ({
        type: LOGIN_USER_SUCCESS
    });
    const loginUserFailure = (error) => ({
        type: LOGIN_USER_FAILURE,
        payload: { error },
    });
    return (dispatch) => {
        dispatch(loginUserRequest());
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(), 3000);
        });
        promise.then(() => {
            if (cred.userName === 'a@a.com' && cred.password === 'password') {
                dispatch(loginUserSuccess());
                dispatch(push('/home'));
            } else {
                dispatch(loginUserFailure(new Error('Wrong credentials!!')));
            }
        });
    };
};

export const logoutUser = () => ({
    type: LOGOUT_USER,
});
