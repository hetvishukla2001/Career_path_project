import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const   Cards= ({title,dec,url,urlimage}) =>{
    return (
        
       <div style={{marginLeft:"20rem",marginTop:"1rem",marginBottom:"1rem",marginRight:"20rem"}}>
            <Card style={{height:"10% !important",overflow:"auto;",}}>
         <CardImage src={urlimage}
         style={{height:"11rem",margin:"1rem"}}
           alt="Card Image" /> 
        <CardBody>
        <a
                        href={url}
                        target="_blank"
                        rel="url og news"
                    ><H6 color="gray">{title}</H6></a>
            <Paragraph color="blueGray">
               {dec}
            </Paragraph>
            
        </CardBody>
    </Card>
       </div>  
       
     
    );
}
export default Cards;