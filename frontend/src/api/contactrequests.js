import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllContacts = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/contacts`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postContacts = (payload)=>{
    axios.post(`${BASE_URL}/contacts`,payload);
}

export const deleteContacts = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/contacts/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
