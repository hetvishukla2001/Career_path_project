import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Radio from "@material-tailwind/react/radio";
import Label from "@material-tailwind/react/Label";
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import {useState} from 'react'


export default function Register() {
    const [user,setUser]=useState({
        name:"",email:"",password:"",cpassword:"",phone:"",university:"",student:""
    })
    let name,value;
    const handleInput =(e) =>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
        


    }
    return (
        <Page >
            <DefaultNavbar />
            
            <Container >
            <div style={{marginTop:"25rem"}}>
                <Card>
                <form onSubmit={(e) => e.preventDefault()}>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Register
                        </H5>
                    </CardHeader>

                    <CardBody>
                    
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                value={user.name}
                                name="name"
                                onChange={handleInput}
                                color="lightBlue"
                                placeholder="username"
                                iconName="account_circle"
                            />
                        </div>
                       
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInput}
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInput}
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                name="cpassword"
                                value={user.cpassword}
                                onChange={handleInput}
                                color="lightBlue"
                                placeholder="Repeat Password"
                                iconName="lock"
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                value={user.phone}
                                name="phone"
                                onChange={handleInput}
                                color="lightBlue"
                                placeholder="phone"
                                iconName="account_circle"
                            />
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                name="university"
                                value={user.university}
                                onChange={handleInput}
                                color="lightBlue"
                                placeholder="university"
                                iconName="account_circle"
                            />
                        </div>
                        <div className="mb-4 px-4">
                        <Label color="">Are you A student?</Label>
                        <Radio
                            color="pink"
                            text="Option 1"
                            id="option-1"
                            name="option"
                        />
                        <Radio
                            color="pink"
                            text="Option 2"
                            id="option-2"
                            name="option"
                        />
                        </div>
                        
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                            >
                                Register
                            </Button>
                        </div>
                    </CardFooter>
                    </form>
                </Card>
                </div>
            </Container>
           
            <SimpleFooter />
        </Page>
    );
}
