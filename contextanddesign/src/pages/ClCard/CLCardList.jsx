import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import clCardService from '../../Service/clCardService'



export default function CLCardList() {

  let [cardList, setCardList] = useState([])
  
    
  useEffect(() => {
    let cardService = new clCardService()


    const fetchCards = async () => {
      const result = await cardService.getClCards();
      setCardList(result.data.data);
    };
    fetchCards();
  },[]);




  return (
    <div >

                  
 <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Create By</th>
    </tr>
  </thead>
  <tbody>
    {
        
    
    cardList.map((card) => {
      return (
        <tr key={card.id}>
      <th   >{card.id}</th>
      <td><NavLink to={`/clcard/${card.id}`}>

            {card.name}
        </NavLink>
      </td>
      <td>{card.description}</td>
      <td>{card.createdBy}</td>
         </tr>
      )

    })
  }
  </tbody>
</table>


                          </div>
  )
}
