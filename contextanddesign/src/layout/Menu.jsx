import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
export default function Menu() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

      <Button style={{ width: '120px', height: '50px' ,background: "black"}} onClick={handleShow} >Tüm İşlemler</Button>

      <Offcanvas show={show} onHide={handleClose} style={{width:'250px'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tüm İşlemler</Offcanvas.Title>
        </Offcanvas.Header>
      
        <Offcanvas.Body>
       <p>
       <NavLink to="/clcard" end>
          <Button style={{ width: '200px', height: '50px' ,background: "black"}} >Cari İşlemleri</Button>
        </NavLink>
       </p>

      
       
       <p>
        
          <NavLink to="/stock" end>

          
          <Button style={{ width: '200px', height: '50px',background: "black" }}  >Stok İşlemleri</Button>
          

          </NavLink>
         
       </p>
       <p>

       <NavLink to="/safe" end>
  


     <Button style={{ width: '200px', height: '50px' ,background: "black"}} >Kasa</Button>
 
 
  </NavLink>
         
       </p>
       <p>

       <NavLink to="/bank" end>
 
  

       <Button style={{ width: '200px', height: '50px' ,background: "black"}}  >Banka İşlemleri</Button>
   
           </NavLink>
         
       </p>
       <p>

       <NavLink to="/user" end>
 

       <Button style={{ width: '200px', height: '50px',background: "black"}}  >Kullanıcı</Button>
 

  </NavLink>
         
       </p>

       <p>
       
  <NavLink to="/personal" end>
  
  
   <Button style={{ width: '200px', height: '50px',background: "black" }}  >Personel İşlemleri</Button>
 
  </NavLink>
  
</p>

<p>
       
       <NavLink to="/personal" end>
       
       
        <Button style={{ width: '200px', height: '50px' ,background: "black"}}  >Boş</Button>
      
       </NavLink>
       
     </p>
     <p>
       
       <NavLink to="/personal" end>
       
       
        <Button style={{ width: '200px', height: '50px',background: "black" }}  >Boş</Button>
      
       </NavLink>
       
     </p>
     <p>
       
       <NavLink to="/personal" end>
       
       
        <Button style={{ width: '200px', height: '50px' ,background: "black"}}  >Boş</Button>
      
       </NavLink>
       
     </p>

     <p>
       
       <NavLink to="/personal" end>
       
       
        <Button style={{ width: '200px', height: '50px' ,background: "black"}}  >Boş</Button>
      
       </NavLink>
       
     </p>


     <p>
       
       <NavLink to="/personal" end>
       
       
        <Button style={{ width: '200px', height: '50px',background: "black" }}  >Boş</Button>
      
       </NavLink>
       
     </p>

     
        </Offcanvas.Body>
        
        
      </Offcanvas>

      
       
 
  
   
   
    
      
    </div>
 
 
 
 

 
 
  

  )
}
