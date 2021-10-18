import React from 'react';
import './qa.css';
import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';

const Prof = () => {
    return(
        <>
            <div className="absolute w-full z-20" >
                <DefaultNavbar />
            </div>
            <div className="body">
                <section className="main-div1" >
                    Professor (Name)
                    <img src="logo.svg" style={ {marginLeft:"200px"} }/>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
                        <div className="details" style={{textAlign:'left',paddingTop:"20px"}}>
                            <p>Degree: </p>
                            <p>Years of experience: </p>
                            <p>Email: </p>
                            <p>Phone: </p>
                        </div>
                        <div className="details" style={{paddingTop:"20px"}}>
                            <p>xxx</p>
                            <p>xx</p>
                            <p>xxx</p>
                            <p>xxx</p>
                        </div>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <form>
                            <p>Type a question</p>
                            <input style={{height:"60px", width:"500px",overflow:"auto"}}></input><br />
                            <button>
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            <DefaultFooter />
        </>
    );
}

export default Prof;