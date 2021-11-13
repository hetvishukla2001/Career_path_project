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


import { useState } from "react";

const CollegePage = (props) => { 
    
    const {id} = props.location.state
    let info=data.find(data=> data.id === id)
    const [openTab, setOpenTab] = useState(1);

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
                    <p>
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
            </TabContent>
        </Tab>
        <DefaultFooter />
        </>
    );
}

export default CollegePage;