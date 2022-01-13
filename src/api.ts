import axios, { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';

export const Api = (ctx?: any): AxiosInstance  => {
    
    const { 'jragropecas-token': token } = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3001',
    });

    if(token){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return api;
}

const api = Api();

export default api;

