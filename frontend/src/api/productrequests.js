import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllProducts = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/products`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postProducts = (payload)=>{
    axios.post(`${BASE_URL}/products`,payload);
}

export const deleteProducts = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/products/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
