import axios from "axios";
import BASE_URL from "../baseUrl";

const endpoint = "/book"

export default  class GetAllBooks {
    static async getAllBooks() {
        const res = await axios.get(`${BASE_URL}${endpoint}`)
        return res.data
    }
}