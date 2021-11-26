import DefaultNavbar from 'components/DefaultNavbar';
import DefaultFooter from 'components/DefaultFooter';

export default function Review() {
    return(
        <>
            <div className="absolute w-full z-20" style={{backgroundColor:"lightgrey"}}>
                <DefaultNavbar />
            </div>
            
            <div style={{paddingTop:"10rem"}}>
                <DefaultFooter />       
            </div>
            
        </>
    );
}