import axios from "axios";
import BASE_URL from "../baseUrl";

const endpoint = "/book";

export default class GetSingleBook{
    static async getSingeBook(BookId){
        try{
            const response = await axios.get(`${BASE_URL}${endpoint}/${BookId}`);
            return response.data;
        } catch(error){
            throw error;
        }

    }
}