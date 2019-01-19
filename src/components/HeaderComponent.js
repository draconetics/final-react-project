import React, {Component} from 'react';
import {Jumbotron, Navbar, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            /*agrupa varios elementos sin necesidad de un div su forma abreviada es <></>*/
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">SSI</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Sistema de Seguridad industrial</h1>
                                <p>We take inspiration from the World's best safety practices, and create a unique
                                    fusion experience. Our awesome safety protection items will tickle your safety
                                    vision!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;
