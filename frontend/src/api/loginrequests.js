import { BASE_URL } from "./base_url";
import axios from 'axios';

//login
export const signIn = async(payload)=>{
    const response =  await axios.post(`${BASE_URL}/login`,payload);
    return response.data;
  }