import React from 'react';
import '../css/Login.css'

export default function Login(props){
        
            const handleLogin =() => {props.setIsLoggedIn(2)};
       
    return (

                            <div >  

                            <div className='container'>
                                        <div className='row-4'>
                                                 <section></section>
                                        </div>
                                        <div className="row-4">
                                          <div  className='col-12-sm'>

                                              <form>
                                            <div class="form-group">
                                              <label for="exampleInputEmail1">Email address</label>
                                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                            </div>
                                            <div class="form-group">
                                              <label for="exampleInputPassword1">Password</label>
                                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                            </div>
                                            <div class="form-group form-check">
                                              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                              <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                            <button className= "ui inverted orange button"onClick={handleLogin}> giriş yap </button>
                                          </form>
                                        
                                          </div>

                                              </div>
                                              <div className='row-4'>
                                              <section></section>
                                              </div>
                            </div>

          

            
            
            
            </div>


       
    )
}