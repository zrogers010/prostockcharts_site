import React from 'react';

import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">ProStockCharts</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Screener
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Statistics
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Crypto Currencies
                        </NavItem>
                      </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


export default Header;