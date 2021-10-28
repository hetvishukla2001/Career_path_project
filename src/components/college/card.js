import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

export default function Cards() {
    return (
        
         
         <Card>
             <CardImage src="https://images.unsplash.com/photo-1562774053-701939374585?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Card Image" />
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
     
    );
}