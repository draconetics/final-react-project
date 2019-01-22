import React, {Component} from 'react';
import {ITEMS} from "../shared/items";
import Catalog from "./CatalogComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./HomeComponent";

class Main extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: ITEMS
        };
        console.log("Main constructor es invocado");
    }

    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        };

        console.log("Main render es invocado");
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route exact path='/catalog' component={() => <Catalog items={this.state.items}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;
