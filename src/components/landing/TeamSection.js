import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';
import { Link } from 'react-router-dom';
import usa from './usa.png';
import './TopCourses.css';
import data from 'components/college/CollegeCardData';
import Cards from 'components/college/card';

export default function TeamSection() {
    function collegecard (val,index,arr){
        return (
            <div id="item">
                 <Cards 
            id={val.id}
            name={val.name}
            fees={val.fees}
            city={val.city}
            src={val.src}
            />
             </div>            
        )

    }
    return (
        <section className="">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Here are top 5 rated colleges in Gujarat">
                    According to google, we have selected the top 5 colleges
                    in colleges for last 5 years.
                </Title>
                <div id="grid">
            
          {data.filter((item, id) => id < 5).map(collegecard)}
           
          </div>    
          </div>

            

        </section>
    );
}
