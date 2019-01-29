import * as ActionTypes from './ActionTypes';
import {ITEMS} from "../shared/items";
import axios from 'axios';

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

    /*
    setTimeout(() => {
        //poner items en el store
        dispatch(addItems(ITEMS));
    }, 2000);
    */
   /*
   return fetch(baseUrl + 'items')
        .then(response => response.json())
        .then(items => dispatch(addItems(items)));
    */
   
   return axios.get('http://localhost:3001/items')
        .then(res => {
            console.log(res.data);
            dispatch(addItems(res.data))
        });
        
};

export const fetchComments = () => (dispatch) => {

   return axios.get('http://localhost:3001/comments')
        .then(res => {
            console.log(res.data);
            dispatch(addCommentsDB(res.data))
        });
        
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


// action creator
export const addCommentsDB = (comments) => ({
    type: ActionTypes.ADD_COMMENTS_DB,
    payload: comments
});
