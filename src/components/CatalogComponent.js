import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import ItemDetail from "./ItemdetailComponent";

class Catalog extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            selectedItem: null
        };
    }

    onItemSelect(item) {
        this.setState({
            selectedItem: item
        })
    }

    render() {

        var catalog = this.props.items.map(item => {
            return (
                <div key={item.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => {
                        this.onItemSelect(item)
                    }}>
                        <CardImg width="100%" src={item.image} alt={item.name}/>
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {catalog}
                </div>
                <ItemDetail selectedItem={this.state.selectedItem}/>
            </div>
        );
    }
}

export default Catalog;