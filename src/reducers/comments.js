import {FETCH_COMMENT, SAVE_COMMENT} from "../actions/types";

const initialState = {
    comments: []
};

export default (state = initialState, action) => {
    console.log("inside reducer : " + action.type);
    let currComments = state.comments;

    switch (action.type) {
        case SAVE_COMMENT:
            currComments = currComments ? currComments.concat(action.payload) : [].concat(action.payload);
            return {
                ...state,
                comments: currComments
            };
        case FETCH_COMMENT:
            currComments = state.comments;
            action.payload.forEach(comment => {
                currComments = currComments.concat(comment.name);
            });
            console.log("comments length : " + currComments.length);
            return {
                ...state,
                comments: currComments
            };
        default:
            return state;
    }
}