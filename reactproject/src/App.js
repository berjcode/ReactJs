
import './App.css';
import Course from './Course';
import Images1 from './images/abdullah.png';
import 'bulma/css/bulma.css';
import { useState } from 'react';


function App() {

    const [value,setValue] = useState(0);

    const handlerClick = () =>{setValue(value + 1) }
  return (
    <div  className='App'>
      <section className="hero  is-link">
           <div className="hero-body">
              <p className="title">
                berjcode
              </p>
   
             </div>
</section>
      <div className='container' >

        <hr/>
      <section className='section'>

      <div className='columns'>
      <div className='column'>
      <Course image={Images1} title="Abdullah Balıkçı" description="Yazılım sever"/>
      </div>
      <div className='column'>
      <Course  image={Images1}  title="Huseyin Kardeş" description="Oyun sever"/>
      </div>
      <div className='column'>
      <Course   image={Images1}  title="İsmail Balıkçı" description="Araba sever"/>
      </div>
      <div className='column'>
      <Course   image={Images1}   title="Ryzen"  description="pc"/>
      </div>
        
    </div>
      </section>
   



      </div>
    
    <section className='usestate'>
      <div className='sayactext'> 
        <p> Sayaç :{value}</p>
      </div>
      <div>
        <button  className='button is-success is-outlined'  onClick={handlerClick}>Sayaçı Artır</button>
      </div>
      <div className='buttondelete'>
        <button  className='button is-danger is-outlined'  onClick={()=>{setValue(0)}}>Sayaç sıfırla</button>
      </div>
    </section>

    
    </div>
  );
}

export default App;
