import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllNumbers = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/numbers`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postNumbers = (payload)=>{
    axios.post(`${BASE_URL}/numbers`,payload);
}

export const deleteNumbers = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/numbers/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
