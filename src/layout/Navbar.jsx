import React from 'react'

export default function Navbar(props) {
  const handleLogin =() => {props.setIsLoggedIn(1)};

  return (
    <div className='main'>
      <div className="ui inverted menu">
  
  
  <a href="/" className="item">
    Ascom Bilişim
  </a>
    <div className='right menu'>
      <div className='item '>


      <a href="/" className="item">
       Diğer İşlemler
     </a>
     

      <button className='ui inverted red button' onClick={handleLogin}> Çıkış Yap </button>
 
      </div>
      
    </div>
 
 
 
</div>
   </div>
  )
}
