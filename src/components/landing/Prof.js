import { useState,useEffect } from "react";
import './qa.css';
import Navbar from '../../navbar/Navbar';
import DefaultFooter from 'components/DefaultFooter';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import data from '../college/CollegeCardData';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Prof = () => {
    const [deatils,newdetails]=useState({
        
    });
    const [user,setUser]=useState({
        username: deatils.username ,
        email: deatils.email,
        message:""
    });
    const callProfile=async ()=>{
        try{
            const res= await fetch("/getdata",
            {
                method:"GET",
                headers:{
                    
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
           newdetails(data);
           setUser({
            username: data.username ,
            email: data.email,
            message:""
           }
           )
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
        callProfile();
    },[])
   
    let name,value;
    const handleInput =(e) =>{
        
        name=e.target.name;
        value=e.target.value;
        newdetails({...user,[name]:value})
        setUser({...user,[name]:value})
        


    }
    const PostDataMessage = async (e) =>{
       
        try{
            e.preventDefault(); 
            const {username,email,message}= user
            const res=  await fetch("/doubt",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,email,message
                })
            })
            const data = await res.json();
            
            if(res.status === 422){
                toast.error("please fill all the filed");
               

            }
           
            
            else{
                toast.success("recored review");
                newdetails({
                    username: "" ,
                    email: "",
                    message:""

                });
                setUser({
                    username: "" ,
                    email: "",
                    message:""
                }
                )
               
                
            }
            

        }
        catch(err){
            console.log(err);
        }

    }
    

    return(
        <>
            <Navbar />
           
            <div className="body">
            <section className="main-div1" style={{marginTop:"100px",marginBottom:"100px"}}>
                <Carousel >
                    <div style={{margin:"3rem"}}>
                    <section className="main-div1" >
                            Professor Vishwas Raval
                            {/* <img src="logo.svg" style={ {marginLeft:"200px"} }/> */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                                <div className="details" style={{textAlign:'left',paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Designation: </p>
                                    <p style={{padding:"6px"}}>College:  </p>
                                    <p style={{padding:"6px"}}>Email: </p>
                                    <p style={{padding:"6px"}}>Phone: </p>
                                </div>
                                <div className="details" style={{paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Assistant Professor</p>
                                    <p style={{padding:"6px"}}>MSU Faculty of Technology and Engineering</p>
                                    <p style={{padding:"6px"}}>vishwas.raval-cse@msubaroda.ac.in</p>
                                    <p style={{padding:"6px"}}>9099087167</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center mt-24">
                        <div className="w-full lg:w-8/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                                <div className="flex-auto p-5 lg:p-10">
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                        </section>
                    </div>
                    <div>
                    <section className="main-div1" >
                            Professor Bhoomi Shah
                            {/* <img src="logo.svg" style={ {marginLeft:"200px"} }/> */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                                <div className="details" style={{textAlign:'left',paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Designation: </p>
                                    <p style={{padding:"6px"}}>College: </p>
                                    <p style={{padding:"6px"}}>Email: </p>
                                    <p style={{padding:"6px"}}>Phone: </p>
                                </div>
                                <div className="details" style={{paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Temporary Assistant Professor</p>
                                    <p style={{padding:"6px"}}>MSU Faculty of Technology and Engineering</p>
                                    <p style={{padding:"6px"}}>bhoomi.shah-cse@msubaroda.ac.in</p>
                                    <p style={{padding:"6px"}}>9824405685</p>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                    <div>
                    <section className="main-div1" >
                            Professor Kshitij Gupte
                            {/* <img src="logo.svg" style={ {marginLeft:"200px"} }/> */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                                <div className="details" style={{textAlign:'left',paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Designation: </p>
                                    <p style={{padding:"6px"}}>College: </p>
                                    <p style={{padding:"6px"}}>Email: </p>
                                    <p style={{padding:"6px"}}>Phone: </p>
                                </div>
                                <div className="details" style={{paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Assistant Professor</p>
                                    <p style={{padding:"6px"}}>MSU Faculty of Technology and Engineering</p>
                                    <p style={{padding:"6px"}}>kshitij.gupte-cse@msubaroda.ac.in</p>
                                    <p style={{padding:"6px"}}>9427331268</p>
                                </div>
                            </div>
                            
                        </section>
                    </div>
                </Carousel>
            </section>
           
            </div>
            <div className="flex flex-wrap justify-center mt-24" style={{marginTop:"1rem"}}>
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                         <H3 color="gray">Let us know your Doubt</H3>
                             <Paragraph color="blueGray">
                                 Complete this form and rate our website
                             </Paragraph>
                         </div>
                         <form method="POST">
                             <div className="flex gap-8 mt-16 mb-12">
                                 <Input
                                    value={deatils.username}
                                     type="text"
                                     
                                     name="username"
                                     onChange={handleInput}
                                     placeholder="Full Name"
                                     color="lightBlue"
                                 />
                                 <Input
                                    value={deatils.email}
                                   
                                     type="email"
                                     name="email"
                                     onChange={handleInput}
                                     placeholder="Email Address"
                                     color="lightBlue"
                                 />
                             </div>

                             <Textarea color="lightBlue" placeholder="Message" value={deatils.message}
                             onChange={handleInput}
                             name="message" />

                             <div className="flex justify-center mt-10">
                                 <Button color="lightBlue" ripple="light"
                                 onClick={PostDataMessage}>
                                     Send Message
                                 </Button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
            <DefaultFooter />
        </>
    );
}

export default Prof;
//npm i react-responsive-carousel