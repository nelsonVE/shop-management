import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { useHistory } from 'react-router-dom'
import { useAuthDispatch, useAuthState } from '../contexts'
import { logoutUser } from '../contexts'

const Navigation = () => {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);
    const { username } = useAuthState()
    const toggle = () => setIsOpen(!isOpen);
    const dispatch = useAuthDispatch()

    const handleLogout = () => {
        logoutUser(dispatch)
        return history.push('/')
    }

    const Routes = username !== '' 
        ?
        <>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink to="/" tag={Link}>Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Employees
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem tag={Link} to='/employee/list'>
                            List
                        </DropdownItem>
                        <DropdownItem>
                            Create
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
                <Nav className="ml-auto" navbar>
                <NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        {username}
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem divider />
                        <DropdownItem onClick={ handleLogout }>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </NavItem>
            </Nav>
        </>
        :
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to="/login">Login</NavLink>
            </NavItem>
        </Nav>

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Sitename</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    { Routes }
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation