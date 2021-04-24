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

    const LoginRoute = username !== '' 
        ? 
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                {username}
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Admin panel
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={ handleLogout }>
                    Logout
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        :
        <NavLink tag={Link} to="/login">Login</NavLink>

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Sitename</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            { LoginRoute }
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation