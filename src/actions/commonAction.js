import axios from 'axios';

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOAD_IMAGES_REQUEST = 'LOAD_IMAGES_REQUEST';
export const LOAD_IMAGES_SUCCESS = 'LOAD_IMAGES_SUCCESS';
export const LOAD_IMAGES_FAILURE = 'LOAD_IMAGES_FAILURE';
export const RESET_REDUX_STORE = 'RESET_REDUX_STORE';
export const LOGOUT_USER = 'LOGOUT_USER';
import { push } from 'connected-react-router';
import {PEXEL_API_KEY} from '../utility';

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
                localStorage.setItem('authenticated', 'true');
            } else {
                dispatch(loginUserFailure(new Error('Wrong credentials!!')));
            }
        });
    };
};

export const loadImages = () => {
    const loadImagesRequest = () => ({
        type: LOAD_IMAGES_REQUEST,
    });
    const loadImagesSuccess = (images) => ({
        type: LOAD_IMAGES_SUCCESS,
        payload: {images}
    });
    const loadImagesFailure = (error) => ({
        type: LOAD_IMAGES_FAILURE,
        payload: { error },
    });
    return (dispatch, getState) => {
        dispatch(loadImagesRequest());
        const images = getState().images;
        const url = images.nextUrl.length ? images.nextUrl : 'https://api.pexels.com/v1/curated';
        axios.get(url, {
                headers: {
                    'Authorization': `${PEXEL_API_KEY}`
                }
            })
            .then(res => {
                dispatch(loadImagesSuccess(res.data));
            })
            .catch(err => {
                dispatch(loadImagesFailure(err));
            });
    };
};

export const resetReduxStore = () => ({
    type: RESET_REDUX_STORE
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});
