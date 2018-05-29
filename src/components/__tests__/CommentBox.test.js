import React from 'react';
import { mount, simulate, update } from 'enzyme';

import CommentBox from 'components/CommentBox';

describe('CommentBox Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CommentBox /> );
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders a textarea and a button', () => {
        expect(wrapper.find('textarea').length).toBe(1);
        expect(wrapper.find('button').length).toBe(1);
    });

    describe('textarea functionality', () => {

        beforeEach(() => {
            wrapper.find('textarea').simulate('change', {
                target: { 
                    value: 'new comment'
                }
            });
    
            wrapper.update();
        });

        it('should update a text area when user types', () => {    
            expect(wrapper.find('textarea').prop('value')).toBe('new comment');
        });
    
        it('should clear the textarea on button click', () => {
            wrapper.find('form').simulate('submit');
            wrapper.update();
            expect(wrapper.find('textarea').prop('value')).toBe('');
        });
    });

    
});