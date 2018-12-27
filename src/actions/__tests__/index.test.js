import * as actions from '../index';
import * as types from '../types';

describe('save comment', () => {
    it('has correct type', () => {
        const commentAction = actions.saveComment('new comment');
        expect(commentAction.type).toEqual(types.SAVE_COMMENT);
    });

    it('has correct payload', () => {
        const commentAction = actions.saveComment('new comment');
        expect(commentAction.payload).toEqual('new comment');
    });
});