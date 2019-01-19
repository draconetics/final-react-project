import React, {Component} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import {ITEMS} from "../shared/items";
import Catalog from "./CatalogComponent";
import ItemDetail from "./ItemdetailComponent";

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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Sistema de Seguridad Industrial</NavbarBrand>
                    </div>
                </Navbar>
                <Catalog items={this.state.items}
                         onClick={(itemId) => {
                             this.onItemSelect(itemId)
                         }}/>
                <ItemDetail item={this.state.items.filter((item) => item.id === this.state.selectedItem)[0]}/>
            </div>
        );
    }
}

export default Main;
