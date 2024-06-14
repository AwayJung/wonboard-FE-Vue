import axios from 'axios';


// 토큰을 사용하는 axios 
export const axiosWithAuth = (accessToken) => {
    return axios.create({
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};
// 토큰을 사용하지 않는 axios 
export const axiosWithoutAuth = axios.create();