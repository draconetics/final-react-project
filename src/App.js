import React, {Component} from 'react';
import './App.css';
import {ITEMS} from "./shared/items";
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";
import {ConfigureStore} from "./redux/configureStore";
import {Provider} from "react-redux";

const store = ConfigureStore();

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: ITEMS
        }
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
