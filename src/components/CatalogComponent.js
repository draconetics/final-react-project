import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle} from "reactstrap";

class Catalog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedItem: null
        };
        console.log("Catalog constructor es invocado");
    }

    componentDidMount() {
        console.log("Catalog componentDidMount es invocado");
    }

    renderItem(item) {
        if (item != null) {
            return (
                <Card>
                    <CardImg width="100%" src={item.image} alt={item.name}/>
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div/>
            )
        }
    }

    render() {
        let catalog = this.props.items.map(item => {
            return (
                <div key={item.id} className="col-md-5 col-12  mt-5">
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
                <div className="row">
                    {this.renderItem(this.state.selectedItem)}
                </div>

            </div>
        );
    }

    onItemSelect(item) {
        this.setState(
            {
                selectedItem: item
            }
        )
    }
}

export default Catalog;