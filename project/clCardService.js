import axios from "axios"


export default class clCardService {
        getClCards(){
              
            return axios.get("https://localhost:7286/ClCard/active");
        }

        getClCardById(id)
        {
            return axios.get(`https://localhost:7286/ClCard/${id}`);
        }

        deleteClCard(id)
        {
            return axios.delete(`https://localhost:7286/ClCard/${id}/admin`)
        }
        
        addCard(formData)
        {
            return axios.post("https://localhost:7286/ClCard",formData);
        }
        
        

}