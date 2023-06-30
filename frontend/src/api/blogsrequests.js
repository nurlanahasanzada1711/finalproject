import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllBlogs = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/blogs`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postBlogs = (payload)=>{
    axios.post(`${BASE_URL}/blogs`,payload);
}

export const deleteBlogs = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/blogs/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
