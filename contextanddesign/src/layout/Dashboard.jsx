import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import CLCardList from '../pages/ClCard/CLCardList';
import ClCardDetail from '../pages/ClCard/ClCardDetail';
import { Route, Routes } from 'react-router-dom';
import Ascomdetail from '../pages/ascom/Ascomdetail';
import SafeList from '../pages/safe/SafeList';
import SafeDetail from '../pages/safe/SafeDetail'

import BankDetail from '../pages/bank/BankDetail'
import BankList from '../pages/bank/BankList'
import PersonalDetail from '../pages/personal/PersonalDetail'
import PersonalList from '../pages/personal/PersonalList'
import UserDetail from '../pages/user/UserDetail'
import UserList from '../pages/user/UserList'
import StockDetail from '../pages/stock/StockDetail'
import StockList from '../pages/stock/StockList'
import { Container,Col,Row } from 'react-bootstrap';



export default function Dashboard(props){


   
        return(
            <div>
   

   

  <Navbar />
  <Container fluid>
  <Row style={{ height: '600px' }}>
    <Col md={1} >
   <Menu></Menu>
    
    </Col>
    <Col md={8} style={{ height: '600px' }} >
          
    <Routes>

<Route  exact path="/" element ={<Ascomdetail />} />
<Route exact path="/clcard" element={<CLCardList />}/>

<Route exact path="/clcard/:id" element={<ClCardDetail />}/>
<Route exact path="/safe" element={<SafeList />}/>

<Route exact path="/safe/:id" element={<SafeDetail />}/>

<Route exact path="/bank" element={<BankList />}/>

<Route exact path="/bank/:id" element={<BankDetail />}/>
<Route exact path="/stock" element={<StockList />}/>

<Route exact path="/stock/:id" element={<StockDetail />}/>
<Route exact path="/user" element={<UserList />}/>

<Route exact path="/user/:id" element={<UserDetail />}/>  


<Route exact path="/personal" element={<PersonalList />}/>

<Route exact path="/personal/:id" element={<PersonalDetail />}/>

</Routes>
     </Col >
  </Row  >
  <footer className="bg-light text-center py-3 mt-5 sticky-bottom">
    <p>&copy; Ascom Bilişim</p>
  </footer>

  </Container>
            </div>
        )
}