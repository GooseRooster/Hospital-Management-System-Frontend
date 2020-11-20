import './App.css';
import React from 'react'
import UpdateDetails from './UpdateDetails';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Appointments from './Appointments';
import Person from './Person';


function App() {
  return (
    <Router>
       <div className="App">
       <Switch>
       <Route path="/Login" component={Login}/>
       <Route path="/Account" component={UpdateDetails}/>
       <Route path="/Register" component={Register}/>
       <Route path="/Home" component={Main}/>
       <Route path="/Appointments" component={Appointments}/>
       <Route path="/Person" component={Person}/>
       </Switch>
    </div>  
    </Router>
   
  );
}

export default App;
