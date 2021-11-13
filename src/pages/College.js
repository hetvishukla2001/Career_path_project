import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import data from 'components/college/CollegeCardData';

import Header from 'components/profile/Header';
import Cards from 'components/college/card';
import { Container,Row,Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";


export default function College() {
    function collegecard (val,index,arr){
        return (
            <Col xs="4" style={{ padding:"1.5rem" }}>
                 <Cards 
            id={val.id}
            name={val.name}
            fees={val.fees}
            city={val.city}
            src={val.src}
            />
              </Col>
           
            

        )

    }
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>

                <Header />
                <Container>
          <Row>
            
          {data.map(collegecard)}
           
          </Row>
        </Container>    
            </main>
            <DefaultFooter />
        </>
    );
}
