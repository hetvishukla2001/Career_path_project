import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import { Link } from 'react-router-dom';

export default function ContactCard({ icon, title, children,link }) {
    return (
        <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-blue-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center mb-6">
                <Icon name={icon} size="xl" />
            </div>
            <Link to={`${link}`}><H6 color="gray">{title}</H6></Link>
            <Paragraph color="blueGray">{children}</Paragraph>
        </div>
    );
}
