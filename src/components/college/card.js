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
            <CardImage
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">Card Title</H6>
                <Paragraph color="gray">
                    Don't be scared of the truth because we need to restart the human
                    foundation in truth And I love you like Kanye loves Kanye I love
                    Rick Owens’ bed design but the back is...
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}