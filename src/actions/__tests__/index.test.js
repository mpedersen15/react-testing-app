import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
    it('should return a SAVE_COMMENT action', () => {
        const newCommentText = 'new comment';
    
        const expectedAction = {
            type: SAVE_COMMENT,
            payload: newCommentText
        };
        
        const result = saveComment(newCommentText);

        expect(result).toEqual(expectedAction);
    });
});
