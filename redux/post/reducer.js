import {
    GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_ERROR,
    GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_ERROR,
    CREATE_POST_LOADING, CREATE_POST_SUCCESS, CREATE_POST_ERROR,
    UPDATE_POST_LOADING, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR,
    DELETE_POST_LOADING, DELETE_POST_SUCCESS, DELETE_POST_ERROR
} from './actionTypes';

const initialState = {
    posts: { data: [], loading: false, error: null },
    post: { data: {}, loading: false, error: null },
    createPost: { data: {}, loading: false, error: null },
    updatePost: { data: {}, loading: false, error: null },
    deletePost: { data: {}, loading: false, error: null },
};

export default function postReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_POSTS_LOADING:
            return {
                ...state,
                posts: { data: [], loading: true, error: null }
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: { data: payload, loading: false, error: null }
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: { data: [], loading: false, error: payload }
            };
        case GET_POST_LOADING:
            return {
                ...state,
                post: { data: {}, loading: true, error: null }
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: { data: payload, loading: false, error: null }
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: { data: {}, loading: false, error: payload }
            };
        case CREATE_POST_LOADING:
            return {
                ...state,
                createPost: { data: {}, loading: true, error: null }
            };
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                createPost: { data: payload, loading: false, error: null }
            };
        case CREATE_POST_ERROR:
            return {
                ...state,
                createPost: { data: {}, loading: false, error: payload }
            };
        case UPDATE_POST_LOADING:
            return {
                ...state,
                updatePost: { data: {}, loading: true, error: null }
            };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                updatePost: { data: payload, loading: false, error: null }
            };
        case UPDATE_POST_ERROR:
            return {
                ...state,
                updatePost: { data: {}, loading: false, error: payload }
            };
        case DELETE_POST_LOADING:
            return {
                ...state,
                deletePost: { data: {}, loading: true, error: null }
            };
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                deletePost: { data: payload, loading: false, error: null }
            };
        case DELETE_POST_ERROR:
            return {
                ...state,
                deletePost: { data: {}, loading: false, error: payload }
            };
        default:
            return state;
    }
}