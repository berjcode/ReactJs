import React from 'react'

export default function Menu() {
  return (
    <div>

      
        <div className="ui vertical menu menuSideBar">
  <div class="item">
    <div className="ui input"><input type="text" placeholder="Search..."/></div>
  </div>
  <div className="item itemNavbar">
    İşlemler
    <div className="menu">
    
      
    </div>
  </div>
  <a href="/" className="item itemNavbar ">
     Cari İşlemleri 
  </a>
  <a href="/"  className="item itemNavbar ">
    Stock İşlemleri
  </a>

  <a href="/"  className="item itemNavbar">
  Kasa İşlemleri
  </a>

  <a href="/"  className="item itemNavbar ">
  Banka İşlemleri
  </a>
  <a href="/"  className="item itemNavbar">
  Kullanıcı İşlemleri
  </a>

  <a href="/"  className="item itemNavbar">
  Personel
  </a>
 
</div>   
    </div>
  )
}
