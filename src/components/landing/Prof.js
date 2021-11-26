import React from 'react';
import './qa.css';
import Navbar from '../../navbar/Navbar';
import DefaultFooter from 'components/DefaultFooter';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Prof = () => {
    return(
        <>
            <Navbar />
           
            <div className="body">
            <section className="main-div1" style={{marginTop:"100px"}}>
                <Carousel>
                    <div>
                    <section className="main-div1" >
                            Professor (Name)
                            <img src="logo.svg" style={ {marginLeft:"200px"} }/>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                                <div className="details" style={{textAlign:'left',paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Degree: </p>
                                    <p style={{padding:"6px"}}>Years of experience: </p>
                                    <p style={{padding:"6px"}}>Email: </p>
                                    <p style={{padding:"6px"}}>Phone: </p>
                                </div>
                                <div className="details" style={{paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>xxx</p>
                                    <p style={{padding:"6px"}}>xx</p>
                                    <p style={{padding:"6px"}}>xxx</p>
                                    <p style={{padding:"6px"}}>xxx</p>
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
                            Professor (Name)
                            <img src="logo.svg" style={ {marginLeft:"200px"} }/>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                                <div className="details" style={{textAlign:'left',paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Degree: </p>
                                    <p style={{padding:"6px"}}>Years of experience: </p>
                                    <p style={{padding:"6px"}}>Email: </p>
                                    <p style={{padding:"6px"}}>Phone: </p>
                                </div>
                                <div className="details" style={{paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>xxx</p>
                                    <p style={{padding:"6px"}}>xx</p>
                                    <p style={{padding:"6px"}}>xxx</p>
                                    <p style={{padding:"6px"}}>xxx</p>
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
                            Professor (Name)
                            <img src="logo.svg" style={ {marginLeft:"200px"} }/>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                                <div className="details" style={{textAlign:'left',paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>Degree: </p>
                                    <p style={{padding:"6px"}}>Years of experience: </p>
                                    <p style={{padding:"6px"}}>Email: </p>
                                    <p style={{padding:"6px"}}>Phone: </p>
                                </div>
                                <div className="details" style={{paddingTop:"20px"}}>
                                    <p style={{padding:"6px"}}>xxx</p>
                                    <p style={{padding:"6px"}}>xx</p>
                                    <p style={{padding:"6px"}}>xxx</p>
                                    <p style={{padding:"6px"}}>xxx</p>
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