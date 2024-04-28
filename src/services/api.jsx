import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080//almacenadora/v1/',
    timeout: 5000
})

export const getTasks = async () => {
    try{
        return await apiClient.get('/task')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

const checkResponseStatus = (e) => {
    const responseStatus = e?.response?.status

    if(responseStatus){
        (responseStatus === 401 || responseStatus === 403)
    }
}
