
import './App.css';
import Dashboard from './layout/Dashboard';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'semantic-ui-css/semantic.min.css';
import { GlobalProvider } from './context/Global';


function App() {




  return (
    <div className="App">

      
           <div className='container-fluid'> 
           
           <GlobalProvider>
 

 
            <Dashboard />
            </GlobalProvider>
    </div> </div>
  );
}

export default App;
