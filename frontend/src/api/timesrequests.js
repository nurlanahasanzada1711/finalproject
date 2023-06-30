import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllTimes = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/times`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postTimes = (payload)=>{
    axios.post(`${BASE_URL}/times`,payload);
}

export const deleteTimes = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/times/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
