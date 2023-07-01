import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllAbouts = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/abouts`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postAbouts = (payload)=>{
    axios.post(`${BASE_URL}/abouts`,payload);
}

export const deleteAbouts = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/abouts/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
