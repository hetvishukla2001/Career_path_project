import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import data from 'components/college/CollegeCardData';

import Header from 'components/profile/Header';
import Cards from 'components/college/card';
import { useState } from 'react';


// https://www.youtube.com/watch?v=mZvKPtH9Fzo
export default function College() {
     const [searchTerm, setSearchTerm] =useState('');
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
           
            <div style={{backgroundColor:"lightblue",margin:"5rem",borderRadius:"1rem 1rem",display:"flex"}}>
                <input type="text" placeholder="Search" 
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} style={{width:"99%",height:"3rem",border:"1px solid black",borderRadius:"1rem 1rem",margin:"5px"}}/>
                <i class="fas fa-search fa-2x" style={{margin:"5px",marginTop:"1rem",}} ></i>
            </div>
          <div id="grid">
          
            
          {data.filter((val)=>{
              if(searchTerm == ""){
                  return val;
              }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
              }
          }).map(collegecard)}
           
          </div>    
               
          
            <DefaultFooter />
           
            
        </>
    );
}
