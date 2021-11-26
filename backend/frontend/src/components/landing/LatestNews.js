
import { useEffect,useState } from 'react';
import DefaultFooter from 'components/DefaultFooter';
import Navbar from '../../navbar/Navbar.js';
import Cards from '../news/card';
import Axios from 'axios';


const LatestNews = () => {
    const [articals,set]=useState([]);
    
   
    useEffect(()=>{
        const getartical = async () => {
            try{
            const res=await Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1d438f77aff94dec9029ea9d26c36ecf");
            
            console.log(res)
            set(res.data.articles)
            }
            catch(err){
                console.log(err)
            }
        }
        getartical();
        

    },[]
    )

    return (
        <>
          <div className="relative w-full z-20" style={{marginBottom:"20px"}}>
                    <Navbar
                     />
                </div>

            <div style={{margin:"1rem"}}>
                
                {articals.map((articals) => {
                    return (
                    <Cards
                    title={articals.title}
                    dec={articals.description}
                    url={articals.url}
                    urlimage={articals.urlToImage}></Cards>
                    )
                })}
                
                
            </div>
            <DefaultFooter />
            
             
        </>
    )
}

export default LatestNews;