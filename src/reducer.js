const initialState={
     data:[],
     categorie:[],
     login:false,
     data_profil:{}
}
const reducer=(state=initialState,action)=>{ 

    switch(action.type){
        case "modify_categorie":
            return {...state,categorie:(action.categorie)}
        case "modify_data":
            return {...state,data:(action.data)}
        case "login":
            return {...state, login:(action.log)}
        case "data_login":
            return {...state, data_profil:(action.data)}
    }
    return state
}
export default reducer