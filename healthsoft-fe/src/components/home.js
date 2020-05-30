import React from "react";
import {Link} from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText } from 'reactstrap';

class Home extends React.Component {
    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <Navbar className="mr-2" />
                <i className="fa fa-pull-left"></i>
                <NavbarBrand href="#">Healthsoft</NavbarBrand>
                <Nav>
                    <NavItem>About us</NavItem>
                    <NavItem>Home</NavItem>
                </Nav>
                <NavbarText>Profile</NavbarText>
            </Navbar>
        );
    }
}

export default Home
