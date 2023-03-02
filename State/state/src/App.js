
import './App.css';

import Member from './Member';
import { useState } from 'react';

function getRandomCouse()
{
  const  memberArray = ['Abdullah','Huseyin','Mehmet'];
  return memberArray[Math.floor(Math.random()*memberArray.length)]
}

function App() {
  const [members, setMembers] = useState([])
  const addMember = () => {
      setMembers([...members,getRandomCouse()]);
  }
  return (
    <div className="App">

      <button className="button" onClick={addMember}> Ekle </button>
      <div className='member'>
      {
        members.map((members,index)=> {
          
        return  ( 
         
          <Member key={index} membersName={members} /> 
        );
        
        


        })
        
      } 

</div> 
    </div>
  );
}

export default App;
