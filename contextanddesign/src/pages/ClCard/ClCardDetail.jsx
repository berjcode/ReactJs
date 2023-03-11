
import { useParams } from 'react-router-dom'
import React, {useState,useEffect,useContext} from 'react'
import clCardService from '../../Service/clCardService'
import { GlobalContext } from '../../context/Global'


export default function ClCardDetail()
{

    const {name}=useContext(GlobalContext)
   let {id} =   useParams()


   let [clcard, setCard] = useState({})
  
    
   useEffect(() => {
     let cardService = new clCardService()
 
 
     const fetchCards = async () => {
       const result = await cardService.getClCardById(id);
       setCard(result.data.data);
       console.log(result.data.data);
     };
     fetchCards();
   },[id]);
 
    return (
        <div>
            {name}
            <div >
                    <div className="card" >
                          
                            <div className="card-body">
                                <h5 className="card-title"> Kategori Adı </h5>
                                <p className="card-text">{clcard.name} </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> Kategori Açıklaması: {clcard.description}</li>
                                <li className="list-group-item"> Kategori Oluşturulma Tarihi :{clcard.createdDate}</li>
                                <li className="list-group-item"> Kategori Aktiflik Durumu : { clcard.isActive ? "Aktif" :  "Pasif"} </li>
                            </ul>
                            <div className="card-body">
                                <a href="/" className="card-link">Card link</a>
                                <a href="/" className="card-link">Another link</a>
                            </div>
                            </div>
            </div>

                                     
        </div>
    )
}