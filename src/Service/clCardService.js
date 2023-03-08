import axios from "axios"

export default class clCardService {
        getClCards(){
            return axios.get("https://localhost:7286/Category");
        }
}