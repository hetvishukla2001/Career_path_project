import React, { useState,useContext,useEffect } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import Icon from "@material-tailwind/react/Icon";
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import NavLink from '@material-tailwind/react/NavLink';
import { UserContext } from 'App';

import { Link } from 'react-router-dom';

export default function Navbar1() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const {state,dispatch}=useContext(UserContext)
  const callProfile=async ()=>{
    try{
        const res= await fetch("/profiles",
        {
            method:"GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        const data = await res.json();
       
        if(!res.status === 200){
            const error = new Error(res.error);
            throw error ;

        }
        dispatch({type:"USER",payload:true})

    }
    catch(err){
        console.log(err);
        //history.push("/login")
    }

}
useEffect(()=>{
    callProfile();
},[])


    const RenderMenu = ()=>{
        if(state){
            return (
                <div className="flex flex-col z-50 lg:flex-row lg:items-center">
        <Link to="/logout">
        <NavLink
            href=""
            target="_blank"
            rel="noreferrer"
            ripple="light"
        >
            
            &nbsp;Logout
        </NavLink>
        </Link>
        
    
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
                        Dashboard 
                    </DropdownItem>
                </Link>
                <Link to="/profile">
                    <DropdownItem color="lightBlue">
                        Profile
                    </DropdownItem>
                </Link>
                
                <Link to="/College">
                    <DropdownItem color="lightBlue">
                        College
                    </DropdownItem>
                </Link>
            </Dropdown>
        </div>
        
    </div>
            )
        
        }
        else {
            return (
            
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
            
            
        
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
                            Dashboard
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
            
        </div>
            )
        }
    }

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
            <RenderMenu></RenderMenu>
                               
            </div>
        </NavbarContainer>
    </Navbar>
  );
}