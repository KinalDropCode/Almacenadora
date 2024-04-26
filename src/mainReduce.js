export const mainReducer = (initialState, action) =>{

    switch (action.type) {
        case 'Realiced':
            return initialState.map(list =>{
                if(list.id === action.payload){
                    return{
                        ...list,
                        realiced: !list.realiced
                    }
                }
                return list
            })
          
        case 'Update':
            case 'Realiced':
            return initialState.map(list =>{
                if(list.id === action.payload.id){
                    return{
                        ...list,
                        description: action.payload.description
                    }
                }
                return list
            })
          
        case 'Delete':
            return initialState.filter(list => list.id !== action.payload)  

        case 'Add':
            return [...initialState, action.payload]
          
        default:
            return initialState
    }

}