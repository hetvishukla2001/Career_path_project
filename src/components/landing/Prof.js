import { useState } from "react";
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

const Prof = (props) => {
    const history=useHistory();
    const {id} = props.location.state
    let info=data.find(data=> data.id === id)
    
    const [deatils,newdetails]=useState({
        
    });
    const [user,setUser]=useState({
        username: deatils.username ,
        email: deatils.email,
        message:""
    });
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
            const college=info.name
            const res=  await fetch("/review",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,email,message,college
                })
            })
            const data = await res.json();
            
            if(res.status === 422){
                toast.error("please fill all the field");
               

            }
            else if(res.status === 400){
                toast.error("please login first");
                history.push("/login")

            }
           
            
            else{
                newdetails({message:""});
                setUser({
                    username: deatils.username ,
                    email: deatils.email,
                    
                    message:""});
                toast.success("recored review");
                
               
                
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
            <section className="main-div1" style={{marginTop:"100px"}}>
                <Carousel>
                    <div>
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
                                    <div className="w-full text-center">
                                   
                                    
                                    <H3 color="gray">Let us know your Review About {info.name}</H3>
                                        <Paragraph color="blueGray">
                                            Complete this form 
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
                                                disabled="true"
                                            />
                                            <Input
                                                value={deatils.email}
                                            
                                                type="email"
                                                name="email"
                                                onChange={handleInput}
                                                placeholder="Email Address"
                                                color="lightBlue"
                                                disabled="true"
                                            />
                                        </div>
                                        
                                        <Textarea color="lightBlue" placeholder="Message" value={deatils.message}
                                        onChange={handleInput}
                                        name="message" />

                                        <div className="flex justify-center mt-10">
                                            <Button color="lightBlue" ripple="light"
                                            onClick={PostDataMessage}>
                                                Submit
                                            </Button>
                                        </div>
                                    </form>
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
                            <div style={{paddingTop:"20px"}}>
                                <form>
                                    <p style={{padding:"16px"}}>Type a question</p>
                                    <input style={{height:"60px", width:"500px",overflow:"auto",border:"solid"}}></input><br />
                                    <button style={{padding:"16px"}}>
                                        Submit
                                    </button>
                                </form>
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
                            <div style={{paddingTop:"20px"}}>
                                <form>
                                    <p style={{padding:"16px"}}>Type a question</p>
                                    <input style={{height:"60px", width:"500px",overflow:"auto",border:"solid"}}></input><br />
                                    <button style={{padding:"16px"}}>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </Carousel>
            </section>
            </div>
            <DefaultFooter />
        </>
    );
}

export default Prof;
//npm i react-responsive-carousel