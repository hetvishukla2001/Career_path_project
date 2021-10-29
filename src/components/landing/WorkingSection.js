import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import StatusCard from 'components/landing/StatusCard';
import Teamwork from 'assets/img/teamwork.jpeg';
import { Link } from 'react-router-dom';
import pic from '../../assets/img/five-ways-to-build-a-rewarding-career.jpg';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap relative z-50">
                    <StatusCard color="red" icon="school" title="Find College" link="./College">
                        Find and learn about all the colleges in Gujarat.
                    </StatusCard>
                    <StatusCard
                        color="lightBlue"
                        icon="library_books"
                        title="Explore Exams"
                        link=""
                    >
                        Find and learn all the exams to get admission in the department
                        of the college of your choice.
                    </StatusCard>
                    <StatusCard
                        color="teal"
                        icon="article"
                        title="Latest News"
                        link="./LatestNews"
                    >
                        Stay informed about the latest news for your higher studies.
                    </StatusCard>
                    
                </div>

                <div className="flex flex-wrap items-center mt-32">
                    <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="school" size="3xl" />
                        </div>
                        <H4 color="gray"></H4>
                        <LeadText color="blueGray">
                            
                        </LeadText>
                        <LeadText color="blueGray">
                            
                        </LeadText>
                        <Link to="/ReadMore">Read more</Link>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image"  src={pic}/>
                            <CardBody>
                                <H6 color="gray"></H6>
                                <Paragraph color="blueGray">
                                    
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
