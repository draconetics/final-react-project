import * as ActionTypes from './ActionTypes';

// action creator
export const addComment = (itemId, rating, author, comment) => (
    {
        type: ActionTypes.ADD_COMMENT,
        payload: {
            itemId: itemId,
            rating: rating,
            author: author,
            comment: comment
        }
    }
);
