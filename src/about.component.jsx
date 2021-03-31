import React  from 'react';
 import emailImage from './assets/email-svgrepo-com.svg';
import './about.css';
import Sidebar from './sidebar.component';
import { Link } from 'react-router-dom';
const About =() => (
    <div className='about_section'>
        <div className='row'>
            <div className='col-md-3'>
           
            <div className='col-md-3'>
            <Sidebar />
       
        </div>
           

            </div>
            <div className='col-md-9 pl-10'>
            <h1>About iJavaScript</h1>
        <hr />
       
            <div className='row col-md-12'>
                <div className='col-md-2'>
                     <span className='emailImage'><img src={emailImage} alt='' width="120px" /></span> 
                </div>
                <div className='col-md-10 paragraph'>
                    <p className='paragraph'>iJavascript is a research group , founded to check the different javascript framework based on different design pattern .

                    </p>
                    <p className='paragraph'>During Kick-off it will React Angular Knockout and Ember js features. Thi use case wil prove different aspects of framework capabilities. </p>
                </div>
            </div>
      
        <div className='second-part'>
            <h2>Contact Details:</h2>
            <h6><label>Address:</label><span>Manyata Tech Park, Nagawara Bangalore, Karnataka</span></h6>
            <h6><label>Email :</label><span>khushbu.yadav@ibm.com</span></h6>
            <h6><label>Mobile :</label><span>(+91)8976560954</span></h6>
           

           
        </div>

            </div>

        </div>
      
    </div>
    
);

export default About;