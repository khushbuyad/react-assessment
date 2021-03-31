import React from 'react';
// import  {Switch, Route} from 'react-router-dom';
// import About from '../../components/about/about.component';
// import Dashboard from '../../components/dashboard/dashboard.component';
// import Team from '../../components/team/team.component';
import { Link } from 'react-router-dom';
import './sidebar.styles.css';
const Sidebar = () =>{
    return(
        <div className='sidebar'>
            <div className='card card-custom'>
                <h6>React</h6>
                <h1>iJavaScript</h1>
            </div>
            <div class="ff">
            <Link to='/dashboard' className='text_color'>DASHBOARD</Link>
            <hr />
            <Link to='/about' className='text_color'>ABOUT</Link>
            <hr />
            <Link to='/team' className='text_color'>TEAM</Link>
            </div>
        </div>
    )
};
export default Sidebar;