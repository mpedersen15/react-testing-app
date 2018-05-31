import React from 'react';

import { mount } from 'enzyme';

import CommentList from 'components/ComponentList';
import Root from 'Root';

describe('CommentList component', () => {
    let wrapper, initialState;
    beforeEach(() => {
        initialState = {
            comments: [
                'comment 1',
                'comment 2',
                'comment 3',
            ]
        };

        wrapper = mount(<Root initialState={initialState}><CommentList/></Root>);
    });

    it('should create one li per comment', () => {
        expect(wrapper.find('li').length).toBe(3);
    });

    it('should show the text for each comment', () => {
        expect(wrapper.render().text()).toContain('comment 1');
        expect(wrapper.render().text()).toContain('comment 2');
        expect(wrapper.render().text()).toContain('comment 3');

        // Another way to do it...
        wrapper.find('li').forEach((node, index) => {
            expect(node.render().text()).toBe(initialState.comments[index]);
        });
    })
});