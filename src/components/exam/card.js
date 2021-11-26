import React from "react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

 export default function Cards({id,name,level,mode}){
    return (
        
         
        <Card style={{height:"50% !important",overflow:"auto;"}}>
        {/* <CardImage src={src}
           alt="Card Image" /> */}
        <CardBody>
            <H6 color="gray">{name}</H6>
            <Paragraph color="blueGray">
               {mode}
            </Paragraph>
            <h3>{level}</h3>
        </CardBody>
    </Card>
     
    );
}