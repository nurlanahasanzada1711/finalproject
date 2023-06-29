import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllHistories = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/histories`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postHistories = (payload)=>{
    axios.post(`${BASE_URL}/histories`,payload);
}

export const deleteHistories = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/histories/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
