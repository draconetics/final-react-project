import React, {Component} from 'react';
import {Media} from "reactstrap";

class Catalog extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let catalog = this.props.items.map(item => {
            const imgStyle = {
                maxHeight: 128,
                maxWidth: 128
            };
            return (
                <div key={item.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={item.image} alt={item.name} style={imgStyle}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{item.name}</Media>
                            <p>{item.description}</p>
                        </Media>

                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {catalog}
                    </Media>
                </div>

            </div>
        );
    }
}

export default Catalog;