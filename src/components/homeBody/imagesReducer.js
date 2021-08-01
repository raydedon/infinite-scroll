import {LOAD_IMAGES_FAILURE, LOAD_IMAGES_REQUEST, LOAD_IMAGES_SUCCESS} from '../../actions/commonAction';

const initialState = { photos: [], loading: false, nextUrl: '', prevUrl: '' };

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMAGES_REQUEST: {
            return {...state, loading: true};
        }
        case LOAD_IMAGES_SUCCESS: {
            return {...state, photos: [...state.photos, ...action.payload.images.photos], nextUrl: action.payload.images.next_page, prevUrl: action.payload.images.prev_page, loading: false};
        }
        case LOAD_IMAGES_FAILURE: {
            return {...state, loading: false};
        }
        default:
            return state;
    }
};

export default imagesReducer;
