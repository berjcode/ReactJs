import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import CLCardList from '../pages/category/CLCardList';

export default function Dashboard(props){

    
   
        return(
            <div>
               
               <div className="ui grid">
                    <div className="sixteen wide column">
                        <Navbar setIsLoggedIn={props.setIsLoggedIn} />
                    </div>
                    <div className="eight wide column">
                    <Menu/>
                    </div>
                    <div className="four wide column">
                      <CLCardList/>
                    </div>
                    </div>
               
                    <div>

                    
                    
                    
                     </div>        
            </div>
        )
}