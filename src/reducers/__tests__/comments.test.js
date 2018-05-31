import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';


it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    };

    expect(commentsReducer([], action)).toEqual(['new comment']);
});

it('handles actions with an unknown type', () => {
    const action = {
        type: 'blah'
    };

    expect(commentsReducer(['new comment'], action)).toEqual(['new comment']);
})