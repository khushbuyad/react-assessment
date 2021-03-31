import React from 'react';
 import userImage from './assets/user-profile.svg';
import emailImage from './assets/email-svgrepo-com.svg';
import Sidebar from './sidebar.component';
import './team.css';

const Team = () =>(
    <div className='team_page'>
        <div className='row'>
            <div className='col-md-3'>
            <Sidebar />
            </div>
            <div className='col-md-9 pl-10'>
            <h1>Meet The Team</h1>
                    <hr />
                <div className='row'>
                    <div className='col-md-5'>
                      
                        <h4> 
                             <span><img src={userImage} alt ='' height='40px' width='30px' /></span>  
                        &nbsp; &nbsp; &nbsp;Khushbu</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;April</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Shruti</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Anya</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Tina</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Tanvi</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Shubhika</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Shreya</h4>
                        <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;Ananya</h4> 

                    </div>
                    <div className='col-md-7 pl-20 pr-30'>
                         {/* <span className=''><img src={emailImage} alt='' height='300px' width='300px'  /></span>  */}
                    </div>
                </div>
{/* this.customers.map(customer=>{
      <h4> <span><img src={userImage} alt ='' height='40px' width='30px' /></span>&nbsp; &nbsp; &nbsp;{customer.name}</h4>
}) */}
            </div>

        </div>
    </div>
);
export default Team;