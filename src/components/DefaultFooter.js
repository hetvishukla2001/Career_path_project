import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';
import { Link } from 'react-router-dom';
import { UserContext } from 'App';
import { useState,useContext, useEffect ,useHistory} from 'react';

export default function DefaultFooter() {
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
                <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                        <Link to="./Landing" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                        <Link to="./Profile" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                        <Link to="/logout" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                               Logout
                                            </Link>
                                        </li>
                                      
                                        
                                    </ul>
                                </div>                                
                            </div>
                        </div>
                )
        
            }
            else {
                return (
                    <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                        <Link to="./Landing" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                        <Link to="./Profile" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                        <Link to="./Login" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="./Register" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                                Register
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>                                
                            </div>
                        </div>
                    )
                }
            }
    
    return (
        <>
            <footer className="relative bg-gray-100 pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <H5 color="gray">Carrer Path</H5>
                            <div className="-mt-4">
                                <LeadText color="blueGray">
                                    
                                </LeadText>
                            </div>
                            <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">
                                <a
                                    href=""
                                    className="grid place-items-center bg-white text-blue-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-facebook-square"
                                    />
                                </a>
                                <a
                                    href=""
                                    className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-twitter"
                                    />
                                </a>
                                <a
                                    href=""
                                    className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-instagram"
                                    />
                                </a>
                                <a
                                    href=""
                                    className="grid place-items-center bg-white text-red-600 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-youtube"
                                    />
                                </a>
                                <a
                                    href=""
                                    className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                    />
                                </a>
                            </div>
                        </div>
                        <RenderMenu></RenderMenu>
                        
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-700 font-medium py-1">
                                Copyright © {new Date().getFullYear()} Career Path{' '}                              
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
