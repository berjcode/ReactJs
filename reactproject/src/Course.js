import React from 'react';


function Course(props)
{
  
        return (
            <div >
                <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={props.image} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={props.image} alt="" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">  {props.title}</p>
               
                </div>
              </div>

              <div className="content">
               {props.description}
               
              
               
              </div>
            </div>
        </div>

              
            </div>
        );
}

export default Course;