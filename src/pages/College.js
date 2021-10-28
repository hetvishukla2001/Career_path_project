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
              
                <div className=" px-4 mx-auto flex justify-between p-12 ">
               
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                
                </div>
                <div className=" px-4 mx-auto flex justify-between pt-12 pb-12 lg:mt-0">
               
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                
                </div>
                <div className=" px-4 mx-auto flex justify-between pt-12 pb-12 lg:mt-0">
               
               <Cards />
               <Cards />
               <Cards />
               <Cards />
           
           </div>
           <div className=" px-4 mx-auto flex justify-between pt-12 pb-12 lg:mt-0">
               
               <Cards />
               <Cards />
               <Cards />
               <Cards />
           
           </div>
                
                
             
              

              
               
            </main>
            <DefaultFooter />
        </>
    );
}
