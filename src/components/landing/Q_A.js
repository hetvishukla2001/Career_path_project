//few given q/a
//used when we click q/a time in ContactSection
import React, { useState } from "react";
import { questions } from './api_QA';
import './qa.css';
import MyQA from './MyQA';
import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';

const QA = () => {
    const [data, setData] = useState(questions);
    return(
        <>
            <div className="absolute w-full z-20" >
                <DefaultNavbar />
            </div>
            <div className="body">
                <section className="main_div">
                <h1>College related Question and answers</h1>
                {
                    data.map((curElement) => {
                        const { id } = curElement;
                        return <MyQA key={ id} {...curElement }/>
                    })
                } 
                </section>
            </div>
            
            <DefaultFooter />
        </>
    )
}

export default QA;