import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllComments = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/comments`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postComments = (payload)=>{
    axios.post(`${BASE_URL}/comments`,payload);
}

export const deleteComments = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/comments/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
