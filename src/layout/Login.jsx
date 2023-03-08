import React from 'react';

export default function Login(props){
        
            const handleLogin =() => {props.setIsLoggedIn(2)};
       
    return (

        <div>  
            <div className='signIn'>
                <div className='card'>
                    <div className='card-body'>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Kullanıcı Adı</span>
                      </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                         
                        </div>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Şifre</span>
                      </div>
                        <input type="text" className="form-control" placeholder="şifre" aria-label="Username" aria-describedby="basic-addon1"/>
                         
                        </div>

                        
                    </div>
                    <hr></hr>



                    <button className= "ui inverted orange button"onClick={handleLogin}> giriş yap </button>
                </div>

                <section></section>
          
            </div>
            
            
            
            
            </div>


       
    )
}