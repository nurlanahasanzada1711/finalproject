import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllServices = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/services`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postServices = (payload)=>{
    axios.post(`${BASE_URL}/services`,payload);
}

export const deleteServices = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/services/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
