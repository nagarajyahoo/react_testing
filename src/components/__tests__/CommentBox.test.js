import React from 'react';
import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
import Root from "../../Root";

let wrapper;
beforeEach(() => {
    wrapper = mount(<Root><CommentBox/></Root>);
});

afterEach(() => {
    wrapper.unmount();
});

it('Has text box and submit button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
});

it('has text box and user can enter value', () => {
    const commentString = 'some comment';

    //find element and trigger change event with new value
    wrapper.find('textarea').simulate('change', {
        target: {value: commentString}
    });

    //update to reflect the values
    wrapper.update();

    //assert
    expect(wrapper.find('textarea').prop('value')).toEqual(commentString);
});

it('check the submit operation', () => {
    const commentString = 'some comment';

    //simulate entering value and trigger event
    wrapper.find('textarea').simulate('change', {
        target : { value: commentString}
    });

    //update to reflect the changes in value
    wrapper.update();

    //assert
    expect(wrapper.find('textarea').prop('value')).toEqual(commentString);

    //click the button
    wrapper.find('.submit-btn').simulate('submit', {});

    //update to reflect the changes in value
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual("");
});