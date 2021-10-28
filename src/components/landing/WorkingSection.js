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
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Working with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            Don't let your uses guess by attaching tooltips and
                            popoves to any element. Just make sure you enable
                            them first via JavaScript.
                        </LeadText>
                        <LeadText color="blueGray">
                            The kit comes with three pre-built pages to help you
                            get started faster. You can change the text and
                            images and you're good to go. Just make sure you
                            enable them first via JavaScript.
                        </LeadText>
                        <Link to="/ReadMore">Read more</Link>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Card>
                            <CardImage alt="Card Image" src={Teamwork} />
                            <CardBody>
                                <H6 color="gray">Top Notch Services</H6>
                                <Paragraph color="blueGray">
                                    The Arctic Ocean freezes every winter and
                                    much of the sea-ice then thaws every summer,
                                    and that process will continue whatever
                                    happens.
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
