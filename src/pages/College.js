import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import data from 'components/college/CollegeCardData';

import Header from 'components/profile/Header';
import Cards from 'components/college/card';




export default function College() {
    function collegecard (val,index,arr){
        return (
            <div id="item">
                 <Cards 
            id={val.id}
            name={val.name}
            fees={val.fees}
            city={val.city}
            src={val.src}
            />
             </div>
           
            

        )

    }
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
         

                <Header />
                
          <div id="grid">
            
          {data.map(collegecard)}
           
          </div>    
               
           
            <DefaultFooter />
           
            
        </>
    );
}
