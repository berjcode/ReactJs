import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clCardService from '../../Service/clCardService';
import clTypeService from '../../Service/clTypeService';
import { ToastContainer, toast } from 'react-toastify';
export default function ClCardUpdate() {

  let {id}  = useParams();
  let [card, SetCard] = useState([]);
  const [formData , setFormData]= useState({}); 
  const [data,setData] = useState([]);


  const notify = () => toast.success("İşlem Başarılı",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  
  useEffect(() => {
    let cardService = new clCardService();

    const fetchCards = async () => {
      const result = await cardService.getClCardById(id);
      SetCard(result.data.data);
    };
    fetchCards();
  },[id]);

  useEffect( () => {
    let typeService = new clTypeService()

    const fetchCards = async () => {
        const result = await typeService.getClType();
        setData(result.data.data);
    };
    fetchCards();
}, []);


const handleSumbit = async (event) => {
  event.preventDefault();
  const cardService = new clCardService();
  let result = await cardService.updateCard(
    {
    id: card.id,
    code: formData.code ? formData.code : card.code,
    name: formData.name ? formData.name : card.name,
    groupCode :formData.groupCode ? formData.name : card.name,

    clTypeId: formData.clTypeId ? formData.clTypeId : card.clTypeId,
    address: formData.address ? formData.address : card.address,
    address2: formData.address2 ? formData.address2 : card.address2,
    cellPhone1: formData.cellPhone1 ? formData.cellPhone1 : card.cellPhone1,
    cellPhone2: formData.cellPhone2 ? formData.cellPhone2 : card.cellPhone2,
    telephone :formData.telephone ? formData.telephone :card.telephone,
    email: formData.email ?  formData.email : card.email,
    taxOffice : formData.taxOffice ? formData.taxOffice :  card.taxOffice,
    taxNumber : formData.taxNumber ? formData.taxNumber : card.taxNumber,
    speCode1: formData.speCode1 ? formData.speCode1 : card.speCode1,
    speCode2: formData.speCode2 ? formData.speCode2 : card.speCode2,
    speCode3: formData.speCode3 ? formData.speCode3 : card.speCode3,
    speCode4: formData.speCode4 ? formData.speCode4 : card.speCode4,
    speCode5: formData.speCode5 ? formData.speCode5 : card.speCode5,
    groupCode: formData.groupCode ? formData.groupCode : card.groupCode,
    isView: formData.isView ? formData.isView : card.isView,
    modifiyByName: "Abdullah Balıkçı eseridir."
    
  });
  if(result.status === 200)
  {
    notify();
  }
}

const handleChange = (event) => {
  const {name,value} = event.target;
 if(name === "isView"  )
  {
    const intValue = parseInt(value);
    setFormData({ ...formData, [name]: intValue === 1 ? true :false  });
  }else
  {
    setFormData({...formData,[name]: value});
  }

  
  console.log(formData);
 
}


  return (
    <div>

    <form class="ui form" onSubmit={handleSumbit}>
      <h4 class="ui dividing header">Cari Ekle</h4>
      <div class="field">
        <p style={{visibility: 'hidden'}}>{card.id}</p>
        <label>Kod</label>
        <div class="two fields">
          <div class="field">
            <input type="text" name="code" placeholder={card.code}   onChange={handleChange} />
          </div>
          <label>Ad</label>
          <div class="twelve wide field">
            <input type="text" name="name" placeholder={card.name} onChange={handleChange} />
          </div>
          <label>Grup Kodu</label>
          <div class="twelve wide field">
            <input type="text" name="groupCode" placeholder={card.groupCode} onChange={handleChange} />
          </div>
        </div>
        
      </div>
      
      <div class="two fields">
        <div class="field">
          <label>Tür</label>
          <select class="ui fluid dropdown"  name ="clTypeId" onChange={handleChange}>
         
          {data.map((option) => (
           
         <option    key={option.name} value={option.id}>
          {option.name}
        </option>
        
      ))}
          </select>
          
        </div>
      
        <div className='field'>
        <label>Adres</label>
          <div class="twelve wide field">
            <input type="text" name="address" placeholder={card.address} onChange={handleChange} />
          </div>
        </div>
    
      
      </div>
      <div class="field">
        <label>Adres</label>
        <div class="two fields">
          <div class="field">
            <input type="text" name="address2" placeholder={card.address2}  onChange={handleChange} />
          </div>
          <label>Telefon</label>
          <div class="twelve wide field">
            <input type="number" name="cellPhone1" placeholder={card.cellPhone1} onChange={handleChange} />
            <input type="number" name="cellPhone2"  placeholder={card.cellPhone2}  onChange={handleChange} />
          </div>
          
          
        </div>
        
      </div>
      <div class="field">
        <label>Sabit Numara</label>
        <div class="two fields">
          <div class="field">
            <input type="number" name="telephone" placeholder={card.telephone} onChange={handleChange} />
          </div>
          <label>Mail</label>
          <div class="twelve wide field">
            <input type="email" name="email"  placeholder={card.email}  onChange={handleChange}/>
          </div>
          
        </div>
        
      </div>
    
      <div class="field">
        <label>Tax Office </label>
        <div class="two fields">
          <div class="field">
            <input type="text" name="taxOffice"  placeholder={card.taxOffice} onChange={handleChange} />
          </div>
          <label>Tax  Number</label>
          <div class="twelve wide field">
            <input type="number" name="taxNumber"  placeholder={card.taxNumber} onChange={handleChange} />
          </div>
          
        </div>
        
      </div>
    
      <div class="field">
        <label>Spe Code </label>
        <div class="two fields">
          <div class="field">
            <input type="number" name="speCode1"  placeholder={card.speCode1} onChange={handleChange} />
          </div>
          <label>Spe Code</label>
          <div class="twelve wide field">
            <input type="number" name="speCode2" placeholder={card.speCode2}  onChange={handleChange}/>
          </div>
          <label>Spe Code</label>
          <div class="twelve wide field">
            <input type="number" name="speCode3"  placeholder={card.speCode3} onChange={handleChange} />
          </div>
          <label>Spe Code</label>
          <div class="twelve wide field">
            <input type="number" name="speCode4"  placeholder={card.speCode4} onChange={handleChange} />
          </div>
          <label>Spe Code</label>
          <div class="twelve wide field">
            <input type="number" name="speCode5"  placeholder={card.speCode5} onChange={handleChange} />
          </div>
    
          
          
      
        
    
          
        </div>
        <label> isView</label>
       
      
        <div class="field">
          <div class="ui  checkbox">
            <input type="checkbox" name="isView" value={1} onChange={handleChange} />
            <label>Aktif</label>
          </div>
        </div>
      
    
    
    
          
      </div>
      
    
      <div class="ui green button"  onClick={handleSumbit} >Kaydet</div>
      <ToastContainer />
    </form>
    
    
        </div>
  )
}
