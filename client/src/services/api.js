import { setUserData } from "../redux/userSlice";
import { serverUrl } from "../utils/config"
import axios from "axios"

export const getCurrentUser = async (dispatch)=>{
  try {
    const result = await axios.get(serverUrl + '/api/user/currentuser',{
      withCredentials:true
    })
    dispatch(setUserData(result.data))
  } catch (error) {
    console.log(error.response?.data?.message || error.message);
  }
}