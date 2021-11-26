
import DefaultFooter from 'components/DefaultFooter';
import Navbar from '../../navbar/Navbar.js';
import ReviewCard from "components/college/ReviewCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';
import H3 from '@material-tailwind/react/Heading3';

export default function Review() {
    const history=useHistory();
    const [getvalue,revalue] =useState([]);

    const [deatils,newdetails]=useState({
        
    });
   
    
    const callReview= async ()=>{
        try{
            const res=  await fetch("/getreviewall",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    
                })
            })
            const data = await res.json();
            revalue(data);
            console.log(data)
            console.log()
           
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error ;

            }

        }
        catch(err){
            console.log(err);
            
        }

    }
   
    useEffect(()=>{
       
        callReview();
    },[])
   
  


    return(
        <>
          <Navbar/>
         
                    <form method="POST">
                                    <H3 color="gray">All Review About College</H3>
                                    <div style={{padding:"1rem",margin:"2rem"}}>
                                  
                                                {
                                                    getvalue.map((posFields, POSFieldsId) => {
                                                        return (
                                                            <>
                                                            
                                                            <h3 style={{align:"left",marginLeft:"5rem",fontSize:"2rem", borderLeft: '5px solid lightblue',borderBottom: '5px solid lightblue',borderLeftColor:"lightblue"}}>{posFields.collegename} </h3> 
                                                           
                                                           
                                                        
                                                        
                                                          {posFields.messages.map(message => <div style={{padding:"1rem",margin:"2rem",width:"60rem"}}> <ReviewCard
                                                                    username={message.username}
                                                                    email={message.email}
                                                                    message={message.message}
                                                                    />
                                                                    </div>)}
                                                       
                                                        </>
                                                         
                                                            
                                                        )
                                                      })
                                                    
                                                }
                                    </div>
                                    

                     </form>
            
                
            
            <div style={{paddingTop:"10rem"}}>
                <DefaultFooter />       
            </div>
            
        </>
    );
}