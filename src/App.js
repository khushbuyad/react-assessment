import './App.css';
import HomePage from './homepage.component';

import Dashboard from './dashboard.component';
import About from './about.component';
import Team from './team.component';


import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import MainPage from './main-page.component';
import SignInPage from './sign-in-page.component';


const App = () =>{
  return(
    <Router>
        <Switch>
        {/* <SignInPage/> */}
        <Route exact component= {SignInPage} path='/' />
        <Route component={MainPage} path='/mainpage'  />
        <Route component={Team} path='/team' />
        <Route component={Dashboard} path='/dashboard' />
        <Route component={About} path='/about' />
     
      </Switch> 
       </Router>   
  )
}

export default App;
