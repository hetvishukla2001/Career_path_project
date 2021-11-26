//few given q/a
//used when we click q/a time in ContactSection
import React, { useState } from "react";
import { questions } from './api_QA';
import './qa.css';
import MyQA from './MyQA';
import DefaultFooter from 'components/DefaultFooter';
import Navbar from '../../navbar/Navbar';

const QA = () => {
    const [data, setData] = useState(questions);
    return(
        <>
           <Navbar />
            <div className="body">
                <section className="main_div" style={{width:"90%"}}>
                <h1>College Interview Question and answers</h1>
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