import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

export default function Cards({id,name,fees,city,src}) {
    return (
        
         
         <Card style={{height:"50% !important",overflow:"auto;"}}>
             {/* <CardImage src={src}
                alt="Card Image" /> */}
             <CardBody>
                 <H6 color="gray">{name}</H6>
                 <Paragraph color="blueGray">
                    {city}
                 </Paragraph>
                 <h3>{fees}</h3>
             </CardBody>
         </Card>
     
    );
}