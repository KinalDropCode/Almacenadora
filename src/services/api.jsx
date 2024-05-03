import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/almacenadora/v1/',
    timeout: 5000
})

export const addTask = async (data) => {
    try{
        return await apiClient.post('/task/create', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getTasks = async () => {
    try{
        return await apiClient.get('task')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const putCompleteTask = async (id) => {
    try{
        return await apiClient.put(`task/complete/${id}`)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getCompletedTasks = async () => {
    try{
        return await apiClient.get('/task/completed')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getEarringTasks = async () => {
    try{
        return await apiClient.get('/task/earring')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const putDeleteTask = async (id) => {
    try{
        return await apiClient.delete(`task/${id}`)
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
