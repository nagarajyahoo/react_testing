import React from 'react';
import {mount} from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import moxios from 'moxios';

let wrapper;
beforeEach(() => {
    wrapper = mount(<Root><App/></Root>);
    const url = 'http://jsonplaceholder.typicode.com/comments';
    moxios.install();
    moxios.stubRequest(url,
        {
            status: 200,
            response: [{'name': 'comment 1'}, {'name': 'comment 2'}]
        }
    );
});

afterEach(() => {
    wrapper.unmount();
});

describe('Integration tests', () => {
    it('comments list integration test', (done) => {
        //click on the button to fetch the comments
        wrapper.find('.fetch-comments-btn').simulate('click');

        //this is for async
        moxios.wait(() => {
            //update to reflect the chnages on UI
            wrapper.update();

            //assert the values
            expect(wrapper.find('li').length).toEqual(2);

            //tell JEST we are done
            done();
        });
    });
});
