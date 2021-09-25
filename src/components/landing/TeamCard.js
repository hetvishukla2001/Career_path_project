import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useState } from 'react';

export default function LandingTeamCard({ img, name, position }) {
    const [like,likeNew]=useState(false);
    const check= ()=>{
        likeNew(true);
    }
    const checkdown= ()=>{
        likeNew(false);
    }
    return (
       
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <Image src={img} alt={name} raised />
                <div className="pt-6 text-center">
                    <H6 color="gray">{name}</H6>
                    <Paragraph color="blueGray">{position}</Paragraph>
                    <div className="flex items-center justify-center">
                        
                        {like ? <button onClick={checkdown}>  <i class="fas fa-heart" style={{color:"red"}}></i></button > : <button  onClick={check}>  <i class="far fa-heart" style={{color:"red"}}></i></button>}
                        
                            
                            
                    </div>
                </div>
            </div>
        </div>
    );
}
