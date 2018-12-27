import {SAVE_COMMENT, FETCH_COMMENT, ERROR} from "./types";
import axios from 'axios';

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
};

const gotComments = (comments) => {
    console.log('inside comments ', comments);
    return {
        type: FETCH_COMMENT,
        payload: comments
    }
};

const error = (message) => {
    return {
        type: ERROR,
        payload: message
    }
};

export const fetchComments = () => {
    const url = 'http://jsonplaceholder.typicode.com/comments';
    console.log('calling');

    return (dispatch) => {
        axios.get(url)
            .then(res => {
                console.log('got response', res.data);
                dispatch(gotComments(res.data));
            })
            .catch(err => {
                console.log('error occurred', err);
                dispatch(error(err.data));
            });
    }
};