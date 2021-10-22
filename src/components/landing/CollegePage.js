import React from 'react';
// import './CollegenameApi';
// import './CourseName';
import './CollegePage.css';

import data from '../../school.jsx';

const CollegePage = () => { 
    // name, coursename, fees, eligibility
    return (
        <>

        <nav className="nav tab-wrapper position-relative bg-white false">
            <ul className="ul1 list-unstyled position-relative" >
                <li className="li1 position-relative nav-item hover1" onClick={() => window.location.replace("/#info")} >
                    Info
                </li>
                <li className="li1 position-relative nav-item hover1" onClick={() => window.location.replace("/#courses")} >
                    Courses & Fees
                </li>
                <li className="li1 position-relative nav-item hover1" onClick={() => window.location.replace("/#reviews")} >
                    Reviews
                </li>
                <li className="li1 position-relative nav-item hover1" onClick={() => window.location.replace("/#placement")} >
                    Placement
                </li>
                <li className="li1 position-relative nav-item hover1" onClick={() => window.location.replace("/#gallery")} >
                    Gallery
                </li>
                <li className="li1 position-relative nav-item hover1" onClick={() => window.location.replace("/#faculty")} >
                    Faculty
                </li>
                <li className="li1 position-relative nav-item hover1" onClick={() => window.location.replace("/#hostel")} >
                    Hostel
                </li>
            </ul>
        </nav>  

        {/* Courses & Fees */}
        <h2 id="courses" style={{textAlign:"left",paddingLeft:"10em"}}>Courses & Fees</h2>
        <div style={{paddingLeft:"120px"}}>
            <table className=" table table-striped border-1 table1"style={{width:"700px"}}>
                <thead className="table1">
                    <tr className="table1">
                        <th>Course</th>
                        <th>Fees</th>
                        <th>Eligibility</th>
                    </tr>
                </thead>
                <tbody className="table1">
                    <tr className="table1">
                        <td>{data[0].course1.name}</td>
                        <td>{data[0].course1.fees}</td>
                        <td>{data[0].course1.eli}</td>
                    </tr>
                    <tr className="table1">
                        <td>{data[0].course2.name}</td>
                        <td>f1</td>
                        <td>e1</td>
                    </tr>
                    <tr className="table1">
                        <td>{data[0].course3.name}</td>
                        <td>f1</td>
                        <td>e1</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Gallery */}
        <h2 style={{textAlign:"left",paddingLeft:"10em"}} id="gallery">Gallery</h2>
        <div className="div1 row container-fluid">
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
            <div className="div2 col-3">
                {/* <img src={usa} style={{width:"200px",height:"200px"}}/> */}
            </div>
        </div>


        {/* Faculty */}
        <h2 style={{textAlign:"left",paddingLeft:"10em"}} id="faculty">Faculty</h2>
        <div className="div1">
            <div className="div3">
                <p>Faculty name</p>
                <p>Faculty position</p>
                <p>Faculty contact number</p>
            </div>
            <div className="div3">
                <p>Faculty name</p>
                <p>Faculty position</p>
                <p>Faculty contact number</p>
            </div>
            <div className="div3">
                <p>Faculty name</p>
                <p>Faculty position</p>
                <p>Faculty contact number</p>
            </div>
        </div>

        {/* Hostel */}
        <h2 id="hostel" style={{textAlign:"left",paddingLeft:"10em"}}>Hostel</h2>
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

        </>
    );
}

export default CollegePage;