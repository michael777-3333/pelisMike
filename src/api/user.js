import axios from "./axios";

export const updateUserRequest =(id,user)=>axios.put(`/updateUser/${id}`,user)
export const getUserRequest = (id)=>axios.get(`/getUser/${id}`) 