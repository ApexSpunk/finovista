import {
    GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_ERROR,
    GET_LATEST_POSTS_LOADING, GET_LATEST_POSTS_SUCCESS, GET_LATEST_POSTS_ERROR,
    GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_ERROR,
    CREATE_POST_LOADING, CREATE_POST_SUCCESS, CREATE_POST_ERROR, CREATE_POST_RESET,
    UPDATE_POST_LOADING, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR, UPDATE_POST_RESET,
    DELETE_POST_LOADING, DELETE_POST_SUCCESS, DELETE_POST_ERROR, DELETE_POST_RESET,
} from './actionTypes';

const initialState = {
    posts: { data: [], loading: false, error: null },
    post: { data: {}, loading: false, error: null },
    createPost: { loading: false, error: null, success: null },
    updatePost: { loading: false, error: null, success: null },
    deletePost: { loading: false, error: null, success: null },
    latestPosts: { data: [], loading: false, error: null }
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
        case GET_LATEST_POSTS_LOADING:
            return {
                ...state,
                latestPosts: { data: [], loading: true, error: null }
            };
        case GET_LATEST_POSTS_SUCCESS:
            return {
                ...state,
                latestPosts: { data: payload, loading: false, error: null }
            };
        case GET_LATEST_POSTS_ERROR:
            return {
                ...state,
                latestPosts: { data: [], loading: false, error: payload }
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
                createPost: { loading: true, error: null, success: null }
            };
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                createPost: { loading: false, error: null, success: payload }
            };
        case CREATE_POST_ERROR:
            return {
                ...state,
                createPost: { loading: false, error: payload, success: null }
            };
        case CREATE_POST_RESET:
            return {
                ...state,
                createPost: { loading: false, error: null, success: null }
            };
        case UPDATE_POST_LOADING:
            return {
                ...state,
                updatePost: { loading: true, error: null, success: null }
            };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                updatePost: { loading: false, error: null, success: payload }
            };
        case UPDATE_POST_ERROR:
            return {
                ...state,
                updatePost: { loading: false, error: payload, success: null }
            };
        case UPDATE_POST_RESET:
            return {
                ...state,
                updatePost: { loading: false, error: null, success: null }
            };
        case DELETE_POST_LOADING:
            return {
                ...state,
                deletePost: { loading: true, error: null, success: null }
            };
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                deletePost: { loading: false, error: null, success: payload }
            };
        case DELETE_POST_ERROR:
            return {
                ...state,
                deletePost: { loading: false, error: payload, success: null }
            };
        case DELETE_POST_RESET:
            return {
                ...state,
                deletePost: { loading: false, error: null, success: null }
            };
        default:
            return state;
    }
}