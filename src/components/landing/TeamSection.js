import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';
import { Link } from 'react-router-dom';
import './TopCourses.css';
export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4" style={{paddingBottom:"90px"}}>
                <Title heading="Here are top 5 rated colleges in Gujarat">
                    According to google, we have selected the top 5 colleges
                    in colleges for last 5 years.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard 
                        img={Image1}
                        name="College 1"
                        position="Web Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="College 2"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="College 3"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="College 4"
                        position="Founder and CEO"
                    />
                    <TeamCard
                        img={Image4}
                        name="College 5"
                        position="Founder and CEO"
                    />
                </div>
            </div>

            {/* Top Courses  */}

            <div className="container-fluid div-main" style={{backgroundColor:"lightpink"}}>
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

        </section>
    );
}
