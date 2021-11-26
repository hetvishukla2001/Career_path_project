import react from 'react';
import { useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'App';


const Logout = ()=>{
    const history=useHistory();
    const {state,dispatch}=useContext(UserContext)
    useEffect(()=>{
        fetch ("/logout",{
            method: "GET",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            history.push("/login",{replace:true});
            if(!res.status != 200){
                const error = new Error(res.error);
                throw error ;

            }

        }).catch((err)=>{
            console.log(err)
        })
    })
    
    return (<></>)
    

}

export default Logout