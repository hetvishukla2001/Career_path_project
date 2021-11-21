import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import data from 'components/college/CollegeCardData';

import Header from 'components/profile/Header';
import Cards from 'components/college/card';
import { useState } from 'react';


// https://www.youtube.com/watch?v=mZvKPtH9Fzo
export default function College() {
    // const [searchTerm, setSearchTerm] =useState('');
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
            {/* <div style={{backgroundColor:"lightgrey"}}>
                <input type="text" placeholder="Search" 
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}/>
            </div>
            {data.filter((value) => {
                if(searchTerm == "") {
                    return value
                } else if (value.name.includes(searchTerm)) {
                    return value
                }
            }).map((value,id) => {
                return(
                    <div id="grid" key={id}>           
                        {data.map(collegecard)}         
                    </div>
                )
            })} */}
          <div id="grid">
            
          {data.map(collegecard)}
           
          </div>    
               
          
            <DefaultFooter />
           
            
        </>
    );
}
