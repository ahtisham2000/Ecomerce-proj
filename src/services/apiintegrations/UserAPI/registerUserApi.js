import axios from "axios";
import BASE_URL from "../baseUrl";
const endpoint = "/register";

export default class RegisterUserApi{
    static async registerUser(userData){
try{
            const response = await axios.post(`${BASE_URL}${endpoint}`,userData);
            return response.data;
        } 
catch(error){
            throw error;
        }

    }

}



