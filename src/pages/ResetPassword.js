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

const ResetPassword = () => {
    return(<>
     <Page>
            <DefaultNavbar />

            <Container>
            <form  method='POST' id="login" name="login" style={{border:"none !important"}}>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5
                         color="white" style={{ marginBottom: 0 }}>
                            OTP
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                
                                
                                name="email"
                                placeholder="Email Address"
                                iconName="email"
                                
                            />
                        </div>
                       
                        
                          
                               
                        
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                           
                                
                            
                        </div>
                    </CardFooter>
                </Card>
                </form>
            </Container>
            <SimpleFooter />
        </Page>
    </>)

}

export default ResetPassword;