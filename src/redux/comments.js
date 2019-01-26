import {COMMENTS} from "../shared/comments";
import * as ActionTypes from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            let concat = state.concat(comment);

            console.log("Comment: ", comment);
            console.log("State: " + state);
            console.log("Concat result: " + concat);
            return concat;
        default:
            return state;
    }
};
