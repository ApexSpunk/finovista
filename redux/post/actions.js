import {
    GET_POSTS_LOADING, GET_POSTS_SUCCESS, GET_POSTS_ERROR,
    GET_LATEST_POSTS_LOADING, GET_LATEST_POSTS_SUCCESS, GET_LATEST_POSTS_ERROR,
    GET_POST_LOADING, GET_POST_SUCCESS, GET_POST_ERROR,
    CREATE_POST_LOADING, CREATE_POST_SUCCESS, CREATE_POST_ERROR, CREATE_POST_RESET,
    UPDATE_POST_LOADING, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR, UPDATE_POST_RESET,
    DELETE_POST_LOADING, DELETE_POST_SUCCESS, DELETE_POST_ERROR
} from './actionTypes';
import axios from 'axios';

export const getPosts = (api, data, limit = 10, page = 1) => async dispatch => {
    dispatch({ type: GET_POSTS_LOADING });
    try {
        const response = await axios.get(`/api/${api}?page=${page}&limit=${limit}`, data);
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

export const createPost = (api, post) => async dispatch => {
    dispatch({ type: CREATE_POST_LOADING });
    try {
        const response = await axios.post(`/api/${api}`, post);
        dispatch({ type: CREATE_POST_SUCCESS, payload: "Post created successfully" });
    } catch (error) {
        dispatch({ type: CREATE_POST_ERROR, payload: error });
    }
}

export const updatePost = (api, post) => async dispatch => {
    dispatch({ type: UPDATE_POST_LOADING });
    try {
        const response = await axios.put(`/api/${api}/`, post);
        dispatch({ type: UPDATE_POST_SUCCESS, payload: "Post updated successfully" });
    } catch (error) {
        dispatch({ type: UPDATE_POST_ERROR, payload: error });
    }
}

export const deletePost = (api, id) => async dispatch => {
    dispatch({ type: DELETE_POST_LOADING });
    try {
        await axios.delete(`/api/${api}`, { data: { id } });
        dispatch({ type: DELETE_POST_SUCCESS, payload: "Post deleted successfully" });
    } catch (error) {
        dispatch({ type: DELETE_POST_ERROR, payload: error });
    }
}

export const getLatestPosts = (api, data, limit = 10) => async dispatch => {
    dispatch({ type: GET_LATEST_POSTS_LOADING });
    try {
        const response = await axios.get(`/api/${api}?limit=${limit}`);
        dispatch({ type: GET_LATEST_POSTS_SUCCESS, payload: response.data[data] });
    } catch (error) {
        dispatch({ type: GET_LATEST_POSTS_ERROR, payload: error });
    }
}


