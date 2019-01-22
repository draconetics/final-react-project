import React, {Component} from 'react';
import {ITEMS} from "../shared/items";
import Catalog from "./CatalogComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import {COMMENTS} from "../shared/comments";
import {EMPLOYEES} from "../shared/employees";

class Main extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: ITEMS,
            comments: COMMENTS,
            employees: EMPLOYEES
        };
        console.log("Main constructor es invocado");
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    item={this.state.items.filter(item => item.featured)[0]}
                    employee={this.state.employees.filter(employee => employee.featured)[0]}
                />
            );
        };

        console.log("Main render es invocado");
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/contactus' component={Contact}/>
                    <Route exact path='/catalog' component={() => <Catalog items={this.state.items}/>}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;
