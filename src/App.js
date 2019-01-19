import React, {Component} from 'react';
import './App.css';
import {ITEMS} from "./shared/items";
import Main from "./components/MainComponent";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: ITEMS
        }
    }

    render() {
    return (
        <div className="App">
            <Main/>
        </div>
    );
  }
}

export default App;
