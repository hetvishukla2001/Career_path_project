import Card from '@material-tailwind/react/Card';
import DefaultNavbar from "components/DefaultNavbar";
import Page from "components/login/Page";
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Container from 'components/login/Container';
import SimpleFooter from 'components/SimpleFooter';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Button from '@material-tailwind/react/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from 'App';


const ResetPassword = () => {
    const history= useHistory();
    const {state,dispatch}=useContext(UserContext)
    const [email, newemail]=useState('');
    const [password, newone]=useState('');
    const [cpassword, newtwo]=useState('');
    const [otpform,showForm]=useState(true);
    const [otp,showotp]=useState();
    const back = async () =>{
        history.push("/login")

    }
    const sendotp = async(e) =>{
        try {
            e.preventDefault();
            
            
            const res = await fetch("/forgot",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                   email
                })
            })
            const data=await res.json();
            if(res.status == 201){
                
                toast.success("enter otp send to email");
               
               showForm(false)
               
    
            }
            else {
                toast.error("email is not exist try again");
               
                
    
            }
            

        }
        catch(err){
            console.log(err)

        }

    }
    const checkotp = async(e) =>{
        try {
            e.preventDefault();
            
            
            const res = await fetch("/changePassword",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                   otpcode:otp,password,email:email,cpassword
                })
            })
            const data=await res.json();
            if(res.status == 201){
                
                toast.success("change password ");
               
                const res = await fetch("/signin",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                       email,password
                    })
                })
                    dispatch({type:"USER",payload:true})
                    toast.success("login successfully");
                   
                    history.push("/")
               
    
            }
            else {
                toast.error("otp is incorrect or password not match");
               
                
    
            }
            

        }
        catch(err){
            console.log(err)

        }

    }
    return(<>
     <Page>
            <DefaultNavbar />

            <Container>
            { otpform ?
            <form  method='POST' id="reset" name="reset" style={{border:"none !important"}}>
                <Card>
                    
                    <CardHeader color="lightBlue">
                        <H5
                         color="white" style={{ marginBottom: 0 }}>
                            Reset Password
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
                        
                       
                        
                          
                               
                        
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                           
                        <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                onClick={sendotp}
                            >
                            Send Otp
                            </Button>
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                onClick={back}
                            >
                                Login
                            </Button>
                            
                        </div>
                    </CardFooter>
                    
                </Card>
                </form> 
                : 
                <form  method='POST' id="otpform" name="otpform" style={{border:"none !important"}}>
                <Card>
                    
                    <CardHeader color="lightBlue">
                        <H5
                         color="white" style={{ marginBottom: 0 }}>
                            Reset Password
                        </H5>
                    </CardHeader>

                    <CardBody>
                       
                      
                      <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="number"
                                color="lightBlue"
                                value={otp}
                                onChange={(e)=>{showotp(e.target.value)}}
                                name="otp"
                                placeholder="Otp"
                                
                                
                            />
                        </div>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                value={password}
                                onChange={(e)=>{newone(e.target.value)}}
                                name="password"
                                placeholder="new password"
                                
                                
                            />
                        </div>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                value={cpassword}
                                onChange={(e)=>{newtwo(e.target.value)}}
                                name="cpassword"
                                placeholder="confirm password"
                                
                                
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
                                onClick={checkotp}
                            >
                           Change Password
                            </Button>
                           
                            
                        </div>
                    </CardFooter>
                    
                </Card>
                </form> 
                }
            </Container>
            <SimpleFooter />
        </Page>
    </>)

}

export default ResetPassword;