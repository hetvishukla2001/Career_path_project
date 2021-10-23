import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';


import Header from 'components/profile/Header';
import Cards from 'components/college/card';
import { Container,Row,Col } from 'react-bootstrap';



export default function College() {
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
               
                <Header />
              
                <Container>
                <Row>
                    <Col><Cards /></Col>
                
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                </Row>
                <Row className='m-5'>
                    <Col><Cards /></Col>
                
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                </Row>
                </Container>
                
             
              

              
               
            </main>
            <DefaultFooter />
        </>
    );
}
