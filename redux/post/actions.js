import {
    GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_ERROR,
    GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_ERROR,
    CREATE_POST_LOADING, CREATE_POST_SUCCESS, CREATE_POST_ERROR,
    UPDATE_POST_LOADING, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR,
    DELETE_POST_LOADING, DELETE_POST_SUCCESS, DELETE_POST_ERROR
} from './actionTypes';
import axios from 'axios';

export const getPosts = (api, data, limit=10) => async dispatch => {
    dispatch({ type: GET_POSTS_LOADING });
    try {
        const response = await axios.get(`/api/${api}?limit=${limit}`);
        dispatch({ type: GET_POSTS_SUCCESS, payload: response.data[data] });
    } catch (error) {
        dispatch({ type: GET_POSTS_ERROR, payload: error });
    }
}

export const getPost = (slug, api, data) => async dispatch => {
    dispatch({ type: GET_POST_LOADING });
    try {
        const response = await axios.get(`/api/${api}/${slug}`);
        dispatch({ type: GET_POST_SUCCESS, payload: response.data[data] });
    } catch (error) {
        dispatch({ type: GET_POST_ERROR, payload: error });
    }
}

export const createPost = post => async dispatch => {
    dispatch({ type: CREATE_POST_LOADING });
    try {
        const response = await axios.post('/posts', post);
        dispatch({ type: CREATE_POST_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CREATE_POST_ERROR, payload: error });
    }
}

export const updatePost = (id, post) => async dispatch => {
    dispatch({ type: UPDATE_POST_LOADING });
    try {
        const response = await axios.put(`/posts/${id}`, post);
        dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_POST_ERROR, payload: error });
    }
}

export const deletePost = id => async dispatch => {
    dispatch({ type: DELETE_POST_LOADING });
    try {
        await axios.delete(`/posts/${id}`);
        dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: DELETE_POST_ERROR, payload: error });
    }
}

