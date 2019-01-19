import React, {Component} from 'react';
import {ITEMS} from "../shared/items";
import Catalog from "./CatalogComponent";
import ItemDetail from "./ItemdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: ITEMS,
            selectedItem: null
        };
        console.log("Main constructor es invocado");
    }

    componentDidMount() {
        console.log("Main componentDidMount es invocado");
    }

    onItemSelect(itemId) {
        this.setState({
            selectedItem: itemId
        })
    }

    render() {
        console.log("Main render es invocado");
        return (
            <div>
                <Header/>
                <Catalog items={this.state.items}
                         onClick={(itemId) => {
                             this.onItemSelect(itemId)
                         }}/>
                <ItemDetail item={this.state.items.filter((item) => item.id === this.state.selectedItem)[0]}/>
                <Footer/>
            </div>
        );
    }
}

export default Main;
