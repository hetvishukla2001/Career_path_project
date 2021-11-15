import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

 export default function ReviewCard({username,email,message}){
    return (
        
         
        <Card >
        {/* <CardImage src={src}
           alt="Card Image" /> */}
        <CardBody>
            <H6 color="gray">{username}</H6>
            <Paragraph color="blueGray">
              {message}
            </Paragraph>
            <h3>{email}</h3>
        </CardBody>
    </Card>
     
    );
}