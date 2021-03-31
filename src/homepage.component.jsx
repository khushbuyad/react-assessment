import React from 'react';
import About from './about.component';
import Dashboard from './dashboard.component';

import Team from './team.component';
import  {Switch, Route} from 'react-router-dom';
import './homepage.css';

const HomePage= ()=>{
    return(
        <React.Fragment>
            
                <Switch>
                <div className='menu pl-0'>
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route  path='/about' component={About} />
                    <Route  path='/team' component={Team} />
                </div>
                </Switch>
          
    
        </React.Fragment>
        )

    }

export default HomePage;




// import About from '../../components/about/about.component';
// import Dashboard from '../../components/dashboard/dashboard.component';
// import Team from '../../components/team/team.component';

