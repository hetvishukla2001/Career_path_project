import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';

import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from 'App';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "../assets/styles/important.css"


export default function Login() {
    const {state,dispatch}=useContext(UserContext)
    const history = useHistory();
    const [email, newemail]=useState('');
    const [password,newpassword]=useState('');
    const loginuser = async (e) =>{
        try {
        e.preventDefault();
        
        const res = await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
               email,password
            })
        })
        const data=await res.json();
        if(res.status != 200 ){
            toast.error("Invalid User");
           

        }
       
        else{
            dispatch({type:"USER",payload:true})
            toast.success("login successfully");
           
            history.push("/")
        }

        }
        catch(e){
            console.log(e);
        }

    }
    const changepassword = async()=>{
        history.push("/reset")

    }
    
    return (
        <Page>
            <DefaultNavbar />
            <Container>
            <form  method='POST' id="login" name="login" style={{border:"none !important"}}>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                value={email}
                                onChange={(e)=>{newemail(e.target.value)}}
                                name="email"
                                placeholder="Email Address"
                                iconName="email"
                                
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                name="password"
                                value={password}
                                onChange={(e)=>{newpassword(e.target.value)}}
                                placeholder="Password"
                                iconName="lock"
                            />
                        </div>
                        
                            <span className='forget' onClick={changepassword}>forget password?</span>
                               
                        
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                onClick={loginuser}
                            >
                                Get Started
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                </form>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
