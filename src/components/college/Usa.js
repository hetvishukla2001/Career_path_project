import DefaultFooter from 'components/DefaultFooter';
import Header from 'components/profile/Header';
import Cards from 'components/college/card';
import './usa.css';
import Navbar from '../../navbar/Navbar.js';
export default function Usa() {
    return (
        <>
            <div className="relative w-full z-20" style={{marginBottom:"20px"}}>
                    <Navbar />
                </div>
            <main>               
                <h1 style={{color:"lightskyblue"}} className="align-content-center mt-10">Universities in Usa</h1>
                <div className=" px-4 mx-auto flex  p-12  mb-14">  
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    {/* <Cards />
                    <Cards />
                    <Cards /> */}
                </div>
                <div className=" px-4 mx-auto flex  p-12 mb-14">               
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                </div>               
            </main>

            <h1 style={{color:"lightskyblue"}} className="align-content-center mt-10">University Rankings </h1>
            <table id="table1" className="table-responsive">
                <thead>
                    <tr>
                        <th>UNIVERSITY</th>
                        <th>THE 2021</th>
                        <th>QS 2021</th>
                        <th>US WORLD 2021</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Harvard University</td>
                        <td>3</td>
                        <td>3</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Stanford University</td>
                        <td>2</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>Massachusetts Institute of Technology - MIT</td>
                        <td>4</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>University of California - UC Berkeley</td>
                        <td>7</td>
                        <td>30</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Columbia University</td>
                        <td>17</td>
                        <td>19</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>University of Chicago - UChicago</td>
                        <td>10</td>
                        <td>9</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>California Institute of Technology - CalTech</td>
                        <td>4</td>
                        <td>4</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Princeton University</td>
                        <td>9</td>
                        <td>12</td>
                        <td>11</td>
                    </tr>
                </tbody>
            </table>

            <main>  
            <h1 style={{color:"lightskyblue"}} className="align-content-center mt-10">Exams for Usa</h1>                    
                <div className=" px-4 mx-auto flex  p-12 mb-14">              
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                </div>
                <div className=" px-4 mx-auto flex  p-12 mb-14">               
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                    <div style={{height:"300px",width:"300px"}}><Cards /></div>
                </div>               
            </main>

            <DefaultFooter />
        </>
    );
}
