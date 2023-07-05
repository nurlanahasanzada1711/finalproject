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

export const getServicesById = async (id) => {
    let globalData
    await axios.get(`${BASE_URL}/services/${id}`).then((res) => {
        globalData = res.data
    })
    return globalData
}

export const postServices = async(payload)=>{
  await  axios.post(`${BASE_URL}/services`,payload);
}

export const deleteServices = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/services/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}


export const editServices = async (id, newServices) => {
    await axios.put(`${BASE_URL}/services/${id}`, newServices)
}
