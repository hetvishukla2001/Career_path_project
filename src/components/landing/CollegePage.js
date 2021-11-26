import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import { Image } from "@material-tailwind/react";
import data from '../college/CollegeCardData';
import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';
import data2 from "components/college/CourseFees";
import ReviewCard from "components/college/ReviewCard";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import image from 'components/college/image';
import faculty from "components/college/faculty";


import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CollegePage = (props) => { 
    const history=useHistory();
    
    const {id} = props.location.state
    let info=data.find(data=> data.id === id)
    let course2=data2.find(data2=>data2.id === id)
    let image2 = image.find(image=>image.id === id)
    let faculty2 = faculty.find(faculty=>faculty.id === id)
    const [openTab, setOpenTab] = useState(1);
    const [getvalue,revalue] =useState([]);

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
    const callReview= async ()=>{
        try{
            const res=  await fetch("/getreview",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    college:info.name
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
        callProfile();
        callReview();
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



    return (
        <>
        <div className="absolute w-full z-20">
        <DefaultNavbar />
         </div>
         <section className="relative block h-[500px]">
            <div className={`col${id} bg-cover bg-center absolute top-0 w-full h-full`} />
        </section>

        <Tab>



            <TabList color="red">
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                    }}
                    ripple="light"
                    active={openTab === 1 ? true : false}
                    href="tabItem"
                >
                    Info  
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                    }}
                    ripple="light"
                    active={openTab === 2 ? true : false}
                    href="tabItem"
                >
                    Course & Fees 
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                    }}
                    ripple="light"
                    active={openTab === 3 ? true : false}
                    href="tabItem"
                >
                    Gallery
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                    }}
                    ripple="light"
                    active={openTab === 4 ? true : false}
                    href="tabItem"
                >
                    Faculty
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(5);
                    }}
                    ripple="light"
                    active={openTab === 5 ? true : false}
                    href="tabItem"
                >
                    Placement
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(6);
                    }}
                    ripple="light"
                    active={openTab === 6 ? true : false}
                    href="tabItem"
                >
                    Hostel
                </TabItem>
                <TabItem
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(7);
                    }}
                    ripple="light"
                    active={openTab === 7 ? true : false}
                    href="tabItem"
                >
                    Reviews
                </TabItem>
            </TabList>

            <TabContent>
                <TabPane active={openTab === 1 ? true : false}>
                    <p style={{fontSize:"40px"}}>
                       {info.name}
                    </p>
                </TabPane>
                <TabPane active={openTab === 2 ? true : false}>
                    <h2 style={{textAlign:"left",fontSize:"24px",fontWeight:"bold",paddingBottom:"25px"}}>Courses & Fees</h2>
                    <div style={{paddingLeft:"120px"}}>
                        <table style={{width:"1000px"}}>
                            <thead className="table1">
                                <tr className="table1" style={{fontSize:"25px"}}>
                                    <th>Index No.</th>
                                    <th>Courses</th>
                                    <th>Fees</th>
                                    <th>Eligibility</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                                { course2.course.map((dataDetail, dataindex) => {
                                    return(
                                        <tr key={dataindex} style={{fontSize:"15px"}}>
                                            <td style={{padding:"10px"}}>{dataindex +1}</td>
                                            <td style={{padding:"10px"}}>{dataDetail.name}</td>
                                            <td style={{padding:"10px"}}>{dataDetail.fees}</td>
                                            <td style={{padding:"10px"}}>{dataDetail.eli}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                           
                        </table>
                    </div>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                    {/* Gallery */}
                    <h2 style={{textAlign:"left",fontSize:"24px",fontWeight:"bold",paddingBottom:"50px"}}>Gallery</h2>
                    <AwesomeSlider style={{paddingBottom:"1rem",marginBottom:"1rem"}} animation="cubeAnimation">
                    { image2.images.map((dataDetail, dataindex) => {
                                    return(
                                        <div style={{backgroundColor:"white"}}>
                                            {/* <img src={dataDetail.src}></img> */}
                                            <Image
                                                src={dataDetail.src}//how to do this
                                                rounded={false}
                                                raised={true}
                                                alt="Raised Image"
                                                style={{height:"50rem",width:"70rem"}}
                                                
                                            />
                                          
                                          </div>
                                        
                                    )
                    })}

                       
                        {/* <div>2</div>
                        <div>3</div>
                        <div>4</div> */}
                    </AwesomeSlider>
                </TabPane>
                <TabPane active={openTab === 4 ? true : false}>
                    {/* Faculty */}
                    <h2 style={{textAlign:"left",fontSize:"24px",fontWeight:"bold",paddingBottom:"25px"}}>Faculty</h2>
                    <div style={{paddingLeft:"120px"}}>
                        <table style={{width:"1000px"}}>
                            <thead className="table1">
                                <tr className="table1" style={{fontSize:"25px"}}>
                                    <th>Index No.</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Contact Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                   <td>{course.course1.name}</td> 
                                   <td>{course.course1.fees}</td> 
                                   <td>{course.course1.eli}</td> 
                                </tr> */}
                                { faculty2.details.map((dataDetail, dataindex) => {
                                    return(
                                        <tr key={dataindex} style={{fontSize:"15px"}}>
                                            <td style={{padding:"10px"}}>{dataindex +1}</td>
                                            <td style={{padding:"10px"}}>{dataDetail.name}</td>
                                            <td style={{padding:"10px"}}>{dataDetail.position}</td>
                                            <td style={{padding:"10px"}}>{dataDetail.contact}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                           
                        </table>
                    </div>
                </TabPane>
                <TabPane active={openTab === 5 ? true : false}>
                 
                </TabPane>
                <TabPane active={openTab === 6 ? true : false}>
                    {/* Hostel */}
                   
                </TabPane>
                <TabPane active={openTab === 7 ? true : false}>
                    
                

              
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
                    <form method="POST">
                                    <H3 color="gray">All Review About {info.name}</H3>
                                    <div style={{padding:"1rem",margin:"2rem"}}>
                                    {  getvalue.map(getvalue => <div style={{padding:"1rem",margin:"2rem"}}> <ReviewCard
                                                                    username={getvalue.username}
                                                                    email={getvalue.email}
                                                                    message={getvalue.message}
                                                                    />
                                                                    </div>) }
                                    </div>
                                    

                     </form>
                </TabPane>
            </TabContent>
        </Tab>
        <DefaultFooter />
        </>
    );
}

export default CollegePage;