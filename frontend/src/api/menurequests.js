import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllMenus = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/menus`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postMenus = (payload)=>{
    axios.post(`${BASE_URL}/menus`,payload);
}

export const deleteMenus = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/menus/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
