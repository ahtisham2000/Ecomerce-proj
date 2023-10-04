import axios from "axios";
import BASE_URL from "../baseUrl";

const endpoint = "/confirm"; // Update the endpoint to match your API's endpoint for checkout
const authToken = localStorage.getItem("token"); // Replace with your actual authentication token

export default class CheckoutApi {
  static async checkout(cartData) {
    try {
      const res = await axios.post(
        `${BASE_URL}${endpoint}`,
        cartData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include your authentication token here
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
