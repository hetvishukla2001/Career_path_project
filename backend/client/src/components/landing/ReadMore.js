import './TopCourses.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Abroad.css';
import usa from './usa.png';
import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';

const ReadMore = () => {
    const [readMore,setReadMore]=useState(false);
    const extraContent=<><div className="div-row row">
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="USA" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">France</h4>
        </div>
    </div>
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="Canada" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Sweden</h4>
        </div>
    </div>
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="Australia" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Malaysia</h4>
        </div>
    </div>
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="UK" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Netherlands</h4>
        </div>
    </div>
    </div>
    <div className="div-row row">
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="USA" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Germany</h4>
        </div>
    </div>
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="Canada" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Ireland</h4>
        </div>
    </div>
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="Australia" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">New-Zealand</h4>
        </div>
    </div>
    <div className="col-3 col-main">
        <div className="div-col px-2 py-4 mb-8">
            <img className="pic" src={usa} alt="UK" />
            <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Singapore</h4>
        </div>
    </div>
    </div>
    </>
    
    const linkName=readMore?'Read Less  ':'Read More  '
    return (
        <>
            {/* Top Courses  */}
            <div style={{backgroundColor:"lightgrey"}}>
            <DefaultNavbar />
            </div>
            <div className="container-fluid div-main" style={{backgroundColor:"lightgrey"}}>
                <div className="div-head text-center">
                    <h3 className="heading mt-9 mb-1">TOP COURSES</h3>
                </div>
                <div className="div-head text-center" >
                    <ul className="ul1">
                        <li className="li1">
                            <Link to="../" className="a1" > MBA </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MBBS </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> BE/B.Tech </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> B.Sc </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> B.Com </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> BA </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> M.Sc </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> LLB </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> BCA </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MCA </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MA </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MD </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MDS </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> M.Pharma </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MS </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MMC </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> M.Arch </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MD </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> M.Ed </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> B.Des </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> M.Pharm </Link>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Top Exams  */}

            <div className="container-fluid div-main" style={{backgroundColor:"lightgrey"}}>
                <div className="div-head text-center">
                    <h3 className="heading mt-9 mb-1">TOP EXAMS</h3>
                </div>
                <div className="div-head text-center" >
                    <ul className="ul1">
                        <li className="li1">
                            <Link to="../" className="a1" > NEET </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> JEE-Main </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> GATE </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> CAT </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> TANCET </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> JCECE </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> CUCET </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> NATA </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> CLAT </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> GMAT </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> IELTS </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> GRE </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> TOEFL </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MAT </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> OJEE </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> LEET </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> SNAP </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> ITT-AdvanceD </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> IIT-JAM </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> KMAT-Kerela </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> MAHCET </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Skill Courses  */}
            
            <div className="container-fluid div-main" style={{backgroundColor:"lightgrey"}}>
                <div className="div-head text-center">
                    <h3 className="heading mt-9 mb-1">SKILL COURSES</h3>
                </div>
                <div className="div-head text-center" >
                    <ul className="ul1">
                        <li className="li1">
                            <Link to="../" className="a1" > Digital Marketing Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Computer Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Fashion Designing Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Data Science Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Paramedical Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Interior Design Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Hotel Management Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Graphic Design Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> PMP Certification </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Web Designing Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Photography Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Nursing Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Event Management Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Data Analytics Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Animation Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Artificial Intelligence Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Ethical Hacking Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Physiotherapy Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Business Analyst Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Aviation Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Beautician Courses </Link>
                        </li>
                        <li className="li1">
                            <Link to="../" className="a1"> Machine Learning Courses </Link>
                        </li>
                    </ul>
                </div>
            </div>


    {/*Abroad */}
    <div className="div-main container" style={{marginBottom:"5rem"}}>
                <div className="div-head text-center" >
                    <h3 className="heading mt-9 mb-1">STUDY ABROAD</h3>
                </div>
                <div className="div-block info-wrapper text-centertext-lg mt-10" style={{backgroundColor:"lightgrey"}}>
                    <div className="div-row row">
                        <div className="col-3 col-main">
                            <div className="div-col px-2 py-4 mb-8">
                                <img className="pic" src={usa} alt="USA" />
                                <h4 className="heading4 text-lg mt-3 mb-2 text-secondary"><Link to="/Rough">USA</Link></h4>
                            </div>
                        </div>
                        <div className="col-3 col-main">
                            <div className="div-col px-2 py-4 mb-8">
                                <img className="pic" src={usa} alt="Canada" />
                                <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Canada</h4>
                            </div>
                        </div>
                        <div className="col-3 col-main">
                            <div className="div-col px-2 py-4 mb-8">
                                <img className="pic" src={usa} alt="Australia" />
                                <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">Australia</h4>
                            </div>
                        </div>
                        <div className="col-3 col-main">
                            <div className="div-col px-2 py-4 mb-8">
                                <img className="pic" src={usa} alt="UK" />
                                <h4 className="heading4 text-lg mt-3 mb-2 text-secondary">UK</h4>
                            </div>
                        </div>
                        <div className="more text-lg mb-5" >
                            {/* <p className="view font-weight-bold">View other countries</p> */}
                            <a className="read-more-link" style={{color: "lightcoral"}} onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                            {readMore && extraContent}
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}

export default ReadMore;