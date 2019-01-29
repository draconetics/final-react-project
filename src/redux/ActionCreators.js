import * as ActionTypes from './ActionTypes';
import {ITEMS} from "../shared/items";

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

// es un thunk
// aqui va la logica de negocio para modificar el state
// el thunk puede despachar varias acciones
export const fetchItems = () => (dispatch) => {
    dispatch(itemsLoading(true));

    setTimeout(() => {
        //poner items en el store
        dispatch(addItems(ITEMS));
    }, 2000);
};


// action creator
export const itemsLoading = () => ({
    type: ActionTypes.ITEMS_LOADING
});

// action creator
export const itemsFailed = (errmess) => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errmess
});

// action creator
export const addItems = (items) => ({
    type: ActionTypes.ADD_ITEMS,
    payload: items
});
