import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const history = useHistory();
    const [email, newemail]=useState('');
    const [password,newpassword]=useState('');
    const loginuser = async (e) =>{
        try {
        e.preventDefault();
        console.log(email)
        console.log(password);
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
        if(data.error == "please fill the filed" ){
            toast.error("please fill all the filed");
           

        }
        else if(data.error == " email is not exits" ){
            toast.error("email is not exist");
           
            history.push("/register")

        }
        else if(data.error == "password is incorrect"){
            toast.error("password is incorrect");
           
            
        }
        else{
            toast.success("login successfully");
           
            history.push("/")
        }

        }
        catch(e){
            console.log(e);
        }

    }
    
    return (
        <Page>
            <DefaultNavbar />
            <Container>
            <form  method='POST' id="login" name="login">
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
                        <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="Remember Me"
                                id="remember"
                            />
                        </div>
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
