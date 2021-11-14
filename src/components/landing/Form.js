import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';
import { useState ,useEffect} from 'react';
import { toast } from 'react-toastify';

export default function Form() {
    const [deatils,newdetails]=useState({
        
    });
    const [user,setUser]=useState({
        username: deatils.username ,
        email: deatils.email,
        message:""
    });
    const callProfile=async ()=>{
        try{
            const res= await fetch("/getdata",
            {
                method:"GET",
                headers:{
                    
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
           newdetails(data);
           setUser({
            username: data.username ,
            email: data.email,
            message:""
           }
           )
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error ;

            }

        }
        catch(err){
        console.log(err);
            
        }

    }
   
    useEffect(()=>{
        callProfile();
    },[])
   
    let name,value;
    const handleInput =(e) =>{
        
        name=e.target.name;
        value=e.target.value;
        newdetails({...user,[name]:value})
        setUser({...user,[name]:value})
        


    }
    const PostDataMessage = async (e) =>{
       
        try{
            e.preventDefault(); 
            const {username,email,message}= user
            const res=  await fetch("/message",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,email,message
                })
            })
            const data = await res.json();
            
            if(res.status === 422){
                toast.error("please fill all the filed");
               

            }
           
            
            else{
                toast.success("recored review");
                newdetails({
                    username: "" ,
                    email: "",
                    message:""

                });
                setUser({
                    username: "" ,
                    email: "",
                    message:""
                }
                )
               
                
            }
            

        }
        catch(err){
            console.log(err);
        }

    }
    
   
    return (
        
        
         <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                         <H3 color="gray">Let us know your Review</H3>
                             <Paragraph color="blueGray">
                                 Complete this form and rate our website
                             </Paragraph>
                         </div>
                         <form method="POST">
                             <div className="flex gap-8 mt-16 mb-12">
                                 <Input
                                    value={deatils.username}
                                     type="text"
                                     
                                     name="username"
                                     onChange={handleInput}
                                     placeholder="Full Name"
                                     color="lightBlue"
                                 />
                                 <Input
                                    value={deatils.email}
                                   
                                     type="email"
                                     name="email"
                                     onChange={handleInput}
                                     placeholder="Email Address"
                                     color="lightBlue"
                                 />
                             </div>

                             <Textarea color="lightBlue" placeholder="Message" value={deatils.message}
                             onChange={handleInput}
                             name="message" />

                             <div className="flex justify-center mt-10">
                                 <Button color="lightBlue" ripple="light"
                                 onClick={PostDataMessage}>
                                     Send Message
                                 </Button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
    );
}
