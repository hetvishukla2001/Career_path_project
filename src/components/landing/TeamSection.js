import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';
import { Link } from 'react-router-dom';
import usa from './usa.png';
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
                        img={usa}
                        name="College 1"
                        position=""
                    />
                    <TeamCard
                        img={usa}
                        name="College 2"
                        position=""
                    />
                    <TeamCard
                        img={usa}
                        name="College 3"
                        position=""
                    />
                    <TeamCard
                        img={usa}
                        name="College 4"
                        position=""
                    />
                    <TeamCard
                        img={usa}
                        name="College 5"
                        position=""
                    />
                </div>
            </div>

            

        </section>
    );
}
