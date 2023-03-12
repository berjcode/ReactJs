import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import clCardService from '../../Service/clCardService';
import  clTypeService from '../../Service/clTypeService';
import {clCardSchema} from '../../validations/clCardValidaton'
export default function ClCardAdd() {

  const createClCard = (event) => 
  {
    event.preventDefault()
    let formdata = {
      name: event.target.elements.name.value,
      code: event.target.elements.code.value

    };
    console.log(formdata);
  }
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

 

//get Combobox
useEffect( () => {
    let typeService = new clTypeService()

    const fetchCards = async () => {
        const result = await typeService.getClType();
        setData(result.data.data);
    };
    fetchCards();
}, []);


//post
const handleSumbit = async (event) => {
     event.preventDefault();
      const cardService = new clCardService();
  let result = await cardService.addCard(formData)
  if(result.status === 201)
  {
 
    notify();
  
  }
  
  createClCard();

    
   
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
    <label>Kod</label>
    <div class="two fields">
      <div class="field">
        <input type="text" name="code" placeholder="Kod" onChange={handleChange} />
      </div>
      <label>Ad</label>
      <div class="twelve wide field">
        <input type="text" name="name" placeholder="Cari Adı" onChange={handleChange} />
      </div>
      <label>Grup Kodu</label>
      <div class="twelve wide field">
        <input type="text" name="groupCode" placeholder="Grup Kodu" onChange={handleChange} />
      </div>
    </div>
    
  </div>
  
  <div class="two fields">
    <div class="field">
      <label>Tür</label>
      <select class="ui fluid dropdown" name ="clTypeId" onChange={handleChange}>
      <option value="">Lütfen bir tür seçin</option>
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
        <input type="text" name="address" placeholder="Adres Kodu" onChange={handleChange} />
      </div>
    </div>

  
  </div>
  <div class="field">
    <label>Adres</label>
    <div class="two fields">
      <div class="field">
        <input type="text" name="address2" placeholder="Adres"  onChange={handleChange} />
      </div>
      <label>Telefon</label>
      <div class="twelve wide field">
        <input type="number" name="cellPhone1" placeholder="Telefon" onChange={handleChange} />
        <input type="number" name="cellPhone2" placeholder="Telefon"  onChange={handleChange} />
      </div>
      
      
    </div>
    
  </div>
  <div class="field">
    <label>Sabit Numara</label>
    <div class="two fields">
      <div class="field">
        <input type="number" name="telephone" placeholder="Sabit hat Numarası" onChange={handleChange} />
      </div>
      <label>Mail</label>
      <div class="twelve wide field">
        <input type="email" name="email" placeholder="mail"  onChange={handleChange}/>
      </div>
      
    </div>
    
  </div>

  <div class="field">
    <label>Tax Office </label>
    <div class="two fields">
      <div class="field">
        <input type="text" name="taxOffice" placeholder="taxoffice" onChange={handleChange} />
      </div>
      <label>Tax  Number</label>
      <div class="twelve wide field">
        <input type="number" name="taxNumber" placeholder="numara" onChange={handleChange} />
      </div>
      
    </div>
    
  </div>

  <div class="field">
    <label>Spe Code </label>
    <div class="two fields">
      <div class="field">
        <input type="number" name="speCode1" placeholder="SpeCode-1" onChange={handleChange} />
      </div>
      <label>Spe Code</label>
      <div class="twelve wide field">
        <input type="number" name="speCode2" placeholder="SpeCode-2"  onChange={handleChange}/>
      </div>
      <label>Spe Code</label>
      <div class="twelve wide field">
        <input type="number" name="speCode3" placeholder="SpeCode-3" onChange={handleChange} />
      </div>
      <label>Spe Code</label>
      <div class="twelve wide field">
        <input type="number" name="speCode4" placeholder="SpeCode-4" onChange={handleChange} />
      </div>
      <label>Spe Code</label>
      <div class="twelve wide field">
        <input type="number" name="speCode5" placeholder="SpeCode-5" onChange={handleChange} />
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
