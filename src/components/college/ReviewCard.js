import React from "react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";

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