import './news.css';

import DefaultFooter from 'components/DefaultFooter';
import Navbar from '../../navbar/Navbar.js';
import Axios from 'axios';
import { useEffect,useState } from 'react';
const LatestNews = () => {
    const [artical,setartical]=useState([]);
    useEffect(()=>{
        const getartical = async () => {
            const res=await Axios.get();
        }

    })

    return (
        <>
          <div className="relative w-full z-20" style={{marginBottom:"20px"}}>
                    <Navbar
                     />
                </div>

            <div>
                
            </div>
            
             <DefaultFooter /> 
        </>
    )
}

export default LatestNews;