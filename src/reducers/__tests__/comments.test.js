import commentsReducer from '../comments';
import * as types from '../../actions/types';

it('handles save comment', () => {
    const action = {
        type: types.SAVE_COMMENT,
        payload: 'some comment'
    };

    const newValue = commentsReducer(undefined, action);
    expect(newValue.comments[0]).toEqual('some comment');
});

it('handles unknown type action', () => {
    const action = {
        type: 'Unknown',
        payload: 'some comment'
    };

    const newValue = commentsReducer(undefined, action);
    expect(newValue.comments.length).toEqual(0);
});