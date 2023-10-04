import axios from "axios";
import BASE_URL from "../baseUrl";

const endpoint = "/bookdetail";

export default class getSingleBookDetails{
    static async getSingleBookDetails(BookId){
        try{
            const response = await axios.get(`${BASE_URL}${endpoint}/${BookId}`);
            return response.data;
        } catch(error){
            throw error;
        }

    }
}