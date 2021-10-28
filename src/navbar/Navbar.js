import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import Icon from "@material-tailwind/react/Icon";
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import { Link } from 'react-router-dom';

export default function Navbar1() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="lightBlue" navbar>
        <NavbarContainer>
            <NavbarWrapper>
                <NavbarBrand><Link to="/Landing">Carrer Path</Link></NavbarBrand>
                <NavbarToggler
                    color="white"
                    onClick={() => setOpenNavbar(!openNavbar)}
                    ripple="light"
                />
            </NavbarWrapper>

            {/* <NavbarCollapse open={openNavbar}>
                <Nav leftSide>
                    <NavItem active="light" ripple="light">
                        <Icon name="language" size="xl" />
                        
                    </NavItem>
                    <NavLink href="#navbar" ripple="light">
                        <Icon name="account_circle" size="xl" />
                        
                    </NavLink>
                    <NavItem ripple="light">
                        <Icon name="settings" size="xl" />
                        
                    </NavItem>
                </Nav>
            </NavbarCollapse> */}
            <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Menu
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Landing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            Profile
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            Login
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/College">
                                        <DropdownItem color="lightBlue">
                                            College
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
        </NavbarContainer>
    </Navbar>
  );
}