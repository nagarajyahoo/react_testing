import React from 'react';
import App from 'components/App';
import {shallow} from "enzyme";
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<App/>);
});

it('comment box is present', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1)
});

it('comments list is present', () => {
    expect(wrapper.find(CommentList).length).toEqual(1)
});