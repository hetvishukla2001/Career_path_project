// import './CollegenameApi';
// // import './CourseName';
// import './CollegePage.css';
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


import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CollegePage = (props) => { 
    const history=useHistory();
    
    const {id} = props.location.state
    let info=data.find(data=> data.id === id)
    const [openTab, setOpenTab] = useState(1);

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
                    Faculty
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
                        <table style={{width:"700px"}}>
                            <thead className="table1">
                                <tr className="table1">
                                    <th>Courses</th>
                                    <th>Fees</th>
                                    <th>Eligibility</th>
                                </tr>
                            </thead>
                            <tbody className="table1">
                                <tr className="table1">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="table1">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="table1">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                    {/* Gallery */}
                    <h2 style={{textAlign:"left",fontSize:"24px",fontWeight:"bold",paddingBottom:"50px"}}>Gallery</h2>
                    <div className="flex flex-wrap -mt-12 justify-center">
                        <Image
                            src="data1[0].src1"//how to do this
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                    </div>
                    <div className="flex flex-wrap -mt-12 justify-center">
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                        <Image
                            src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142181816320130902_153619.jpg?tr=h-135,w-205,c-force"
                            rounded={false}
                            raised={true}
                            alt="Raised Image"
                            className="text-blue-gray-800 p-3 w-2 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6"
                        />
                    </div>
                </TabPane>
                <TabPane active={openTab === 4 ? true : false}>
                    {/* Faculty */}
                    <h2 style={{textAlign:"left",fontSize:"24px",fontWeight:"bold",paddingBottom:"25px"}}>Faculty</h2>
                            <div style={{textAlign:"left",display: "flex",flexWrap:"wrap",margin: "0px -8px",paddingLeft: "120px"}}>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                                <div style={{textAlign:"left",position: "relative",flex: "0 0 30%",marginBottom: "1rem",paddingRight: ".5rem",paddingLeft: ".5rem"}}>
                                    <p>Faculty name</p>
                                    <p>Faculty position</p>
                                    <p>Faculty contact number</p>
                                </div>
                            </div>
                </TabPane>
                <TabPane active={openTab === 5 ? true : false}>
                    <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things
                        could be at. So when you get something that has the name Kanye
                        West on it, it’s supposed to be pushing the furthest
                        possibilities. I will be the leader of a company that ends up
                        being worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus.
                    </p>
                </TabPane>
                <TabPane active={openTab === 6 ? true : false}>
                    {/* Hostel */}
                    <h2 style={{textAlign:"left",fontSize:"24px",fontWeight:"bold",paddingBottom:"25px"}}>Hostel for Female</h2>
                    <div style={{paddingLeft:"120px"}}>
                        <table className=" table table-striped border-1 table1"style={{width:"700px"}}>
                            <thead className="table1">
                                <tr className="table1">
                                    <th>Sr. No.</th>
                                    <th>Name of Hostel</th>
                                    <th>Capacity of Hostel</th>
                                </tr>
                            </thead>
                            <tbody className="table1">
                                <tr className="table1">
                                    <td>c1</td>
                                    <td>f1</td>
                                    <td>e1</td>
                                </tr>
                                <tr className="table1">
                                    <td>c1</td>
                                    <td>f1</td>
                                    <td>e1</td>
                                </tr>
                                <tr className="table1">
                                    <td>c1</td>
                                    <td>f1</td>
                                    <td>e1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{textAlign:"left",fontSize:"24px",fontWeight:"bold",paddingBottom:"25px"}}>Hostel for Male</h2>
                    <div style={{paddingLeft:"120px"}}>
                        <table className=" table table-striped border-1 table1"style={{width:"700px"}}>
                            <thead className="table1">
                                <tr className="table1">
                                    <th>Sr. No.</th>
                                    <th>Name of Hostel</th>
                                    <th>Capacity of Hostel</th>
                                </tr>
                            </thead>
                            <tbody className="table1">
                                <tr className="table1">
                                    <td>c1</td>
                                    <td>f1</td>
                                    <td>e1</td>
                                </tr>
                                <tr className="table1">
                                    <td>c1</td>
                                    <td>f1</td>
                                    <td>e1</td>
                                </tr>
                                <tr className="table1">
                                    <td>c1</td>
                                    <td>f1</td>
                                    <td>e1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                </TabPane>
            </TabContent>
        </Tab>
        <DefaultFooter />
        </>
    );
}

export default CollegePage;