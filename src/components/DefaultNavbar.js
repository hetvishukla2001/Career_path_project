import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import { UserContext } from 'App';


export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const {state,dispatch}=useContext(UserContext)
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
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="/"
                       
                        rel="noreferrer"
                    >
                        <NavbarBrand>Carrer Path</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                       <RenderMenu></RenderMenu>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
