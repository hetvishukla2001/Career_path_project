
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

 export default function Cards({id,name,fees,city,src}){
    return (
        
         
        <Card style={{height:"50% !important",overflow:"auto;"}}>
     
        <CardBody>
            <Link to={{ pathname: '/info', state: { id: id} }}><H6 color="gray">{name}</H6></Link>
            <Paragraph color="blueGray">
               {city}
            </Paragraph>
            <h3>{fees}</h3>
        </CardBody>
    </Card>
     
    );
}