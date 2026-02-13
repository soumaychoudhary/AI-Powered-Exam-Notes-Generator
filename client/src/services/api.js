import { serverUrl } from "../config"
import axios from "axios"

export const getCurrentUser = async ()=>{
  try {
    const result = await axios.get(serverUrl + '/api/user/currentuser',{
      withCredentials:true
    })
    console.log(result.data)
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
  }
}