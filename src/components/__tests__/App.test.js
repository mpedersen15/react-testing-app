import React from 'react'
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/ComponentList';

describe('App Component', () => {
    let wrapped;
    beforeEach(() => {
        wrapped = shallow(<App />);
    });

    it('should render the CommentBox', () => {
        expect(wrapped.find(CommentBox).length).toBe(1);
    });
    
    it('should render the CommentList', () => {        
        expect(wrapped.find(CommentList).length).toBe(1);
    });

});