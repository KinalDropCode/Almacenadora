import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/almacenadora/v1/',
    timeout: 5000
})

export const getTasks = async () => {
    try{
        console.log("vamos bien")
        return await apiClient.get('task')
    }catch(e){
        console.log("la cagamos xd")
        return{
            error: true,
            e
        }
    }
}
export const getCompletedTasks = async () => {
    try{
        console.log("vamos bien")
        return await apiClient.get('/task/completed')
    }catch(e){
        console.log("la cagamos xd")
        return{
            error: true,
            e
        }
    }
}

export const getEarringTasks = async () => {
    try{
        console.log("vamos bien")
        return await apiClient.get('/task/earring')
    }catch(e){
        console.log("la cagamos xd")
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
