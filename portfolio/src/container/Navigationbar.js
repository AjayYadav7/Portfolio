import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link} from 'react-router-dom'
const Navigationbar = () => {
    return (
    <div className="navigation">
    <Navbar expand="sm" className="nav">
            <Navbar.Brand className="text-light">Ajay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-right text-white">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Navigationbar
