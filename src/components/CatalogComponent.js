import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

class Catalog extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let catalog = this.props.items.map(item => {
            return (
                <div key={item.id} className="col-md-5 col-12  mt-5">
                    <Card>
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

            </div>
        );
    }
}

export default Catalog;