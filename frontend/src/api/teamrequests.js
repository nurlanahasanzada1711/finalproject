import { BASE_URL } from "./base_url";
import axios from 'axios';

export const getAllTeams = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/teams`)
    .then((res)=>{
        globalData = res.data;
    })

    return globalData
}

export const postTeams = (payload)=>{
    axios.post(`${BASE_URL}/teams`,payload);
}

export const deleteTeams = async (id) => {
    let deletedData
    await axios.delete(`${BASE_URL}/teams/${id}`).then((res) => {
        deletedData = res.data
    })
    return deletedData
}
