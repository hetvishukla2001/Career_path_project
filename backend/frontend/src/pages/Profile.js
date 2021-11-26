import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Content from 'components/profile/Content';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile() {
    const [deatils,newdetails]=useState({});
    const callProfile=async ()=>{
        try{
            const res= await fetch("/profiles",
            {
                method:"GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
           newdetails(data);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error ;

            }

        }
        catch(err){
            console.log(err);
            history.push("/login")
        }

    }
    
    const history = useHistory();
    useEffect(()=>{
        callProfile();
    },[])
   
    return (
        <>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>
            <main>
               
                <Header />
                <form method='GET'>
                <Content
                name={deatils.username}
                phone={deatils.phone}
                email={deatils.email}
                university={deatils.university} />
                </form>
                
            </main>
            <DefaultFooter />
        </>
    );
}
