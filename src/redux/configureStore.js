import {applyMiddleware, combineReducers, createStore} from "redux";
import {Items} from "./items";
import {Comments} from "./comments";
import {Employees} from "./employees";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers(
            {
                items: Items,
                comments: Comments,
                employees: Employees
            }
        ),
        applyMiddleware(thunk, logger)
    );
    return store;
};
