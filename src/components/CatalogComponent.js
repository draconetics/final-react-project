import React, {Component} from 'react';
import {Media} from "reactstrap";

class Catalog extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: [
                {
                    id: 0,
                    name: 'Helmet',
                    image: '/assets/images/helmet.jpg',
                    category: 'safety',
                    label: 'ultra safe',
                    price: '4.99',
                    description: 'Un casco de seguridad útil para proteger en ámbitos como la construcción, fabricas y otros'
                },
                {
                    id: 1,
                    name: 'Audio protector',
                    image: '/assets/images/audio.jpg',
                    category: 'safety',
                    label: 'noise filter',
                    price: '12.99',
                    description: 'Protege de ruidos auditivos por encima de los decibeles considerados aceptables'
                },
                {
                    id: 2,
                    name: 'Glasses',
                    image: '/assets/images/glasses.jpg',
                    category: 'safety',
                    label: 'New technology',
                    price: '31.99',
                    description: 'Permite filtrar rayos ultravioleta, material anti rayas, anti caidas'
                },
                {
                    id: 3,
                    name: 'Gloves',
                    image: '/assets/images/gloves.jpg',
                    category: 'safety',
                    label: '',
                    price: '12.99',
                    description: 'Hechos de algodón con goma antideslizante, especial para industria química.'
                }

            ]
        }
    }

    render() {
        let catalog = this.state.items.map(item => {
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