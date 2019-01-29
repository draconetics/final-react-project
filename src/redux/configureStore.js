import {applyMiddleware, combineReducers, createStore} from "redux";
import {Items} from "./items";
import {Comments} from "./comments";
import {Employees} from "./employees";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import {createForms} from "react-redux-form";
import {InitialFeedback} from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers(
            {
                items: Items,
                comments: Comments,
                employees: Employees,
                ...createForms(
                    {feedback: InitialFeedback}
                )
            }
        ),
        applyMiddleware(thunk, logger)
    );
    return store;
};
