
import './App.css';
import Dashboard from './layout/Dashboard';
import Login from './layout/Login';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'semantic-ui-css/semantic.min.css';


function App() {

const [isLoggedIn,setIsLoggedIn] =useState(1);

  if(isLoggedIn === 1)
  {
    return (
      <div className='container'> 
      <div className='col'>
      <div>
         <Login setIsLoggedIn={setIsLoggedIn}/>
      </div></div></div>
    )
  }else
  {
  return (
    <div className="App">

      
           <div className='container-fluid'> 
           
          
            <Dashboard setIsLoggedIn={setIsLoggedIn}/>
           
    </div> </div>
  );}
}

export default App;
