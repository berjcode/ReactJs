import React,{useState,useEffect} from 'react'
import clCardService from '../../Service/clCardService'



export default function CLCardList() {

  const [cardList, setCardList] = useState([])

  useEffect(() => {
    let cardService = new clCardService()


    const fetchCards = async () => {
      const result = await cardService.getClCards();
      setCardList(result.data.data);
    };
    fetchCards();
  },[]);



  return (
    <div>

<div className="table-container tableCLCard">
<table className="ui celled table ">
  <thead>
    <tr><th>Id</th>
    <th>Name</th>
    <th>Description</th>
  </tr></thead>
  <tbody>
    
  { cardList.map((card) => (
    return (
        <tr key={card.id}>
      <td >{card.id}</td>
      <td >{card.name}</td>
      <td >{card.description}</td>
       </tr>
      )))}
    
  
   
  </tbody>
</table>
</div>

    </div>
  )
}
