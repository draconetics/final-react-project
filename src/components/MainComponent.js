import React, {Component} from 'react';
import Catalog from "./CatalogComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import ItemDetail from "./ItemdetailComponent";
import About from "./AboutComponent";
import {connect} from "react-redux";
import {addComment} from "../redux/ActionCreators";

// de redux al componente
const mapStateToProps = (state) => {
    return {
        items: state.items,
        employees: state.employees,
        comments: state.comments
    }
};

// del componente a redux
const mapDispatchToProps = dispatch => ({
    addComment: (itemId, rating, author, comment) => dispatch(addComment(itemId, rating, author, comment))
});

class Main extends Component {

    constructor(props, context) {
        super(props, context);
        console.log("Main constructor es invocado");
    }

    render() {
        const ItemWithId = ({match}) => {
            return (
                <ItemDetail item={this.props.items.filter((item) => item.id === parseInt(match.params.itemId, 10))[0]}
                            comments={this.props.comments.filter((comment) => comment.itemId === parseInt(match.params.itemId, 10))}
                            addComment={this.props.addComment}
                />
            );
        };

        const HomePage = () => {
            return (
                <Home
                    item={this.props.items.filter(item => item.featured)[0]}
                    employee={this.props.employees.filter(employee => employee.featured)[0]}
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
                    <Route path='/aboutus' component={() => <About employees={this.props.employees}/>}/>
                    <Route exact path='/catalog' component={() => <Catalog items={this.props.items}/>}/>
                    <Route path='/catalog/:itemId' component={ItemWithId}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
