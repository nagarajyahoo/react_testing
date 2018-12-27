import React from 'react';
import {mount} from 'enzyme';
import CommentList from "../CommentList";
import Root from "../../Root";

let commentListWrapper;
beforeEach(() => {
    const initialState = {
        comments: {
            comments: ['one', 'two']
        }
    };

    commentListWrapper = mount(<Root initialState={initialState}><CommentList/></Root>)
});

afterEach(() => {
    commentListWrapper.unmount();
});

it('has one li for each comments', () => {
    expect(commentListWrapper.find('ol').length).toEqual(1);
    expect(commentListWrapper.find('li').length).toEqual(2);
});

it('has comments list', () => {
    // const comments = commentListWrapper.find();
    console.log(commentListWrapper.render().text());
    expect(commentListWrapper.render().text()).toContain('one');
    expect(commentListWrapper.render().text()).toContain('two');
});