const initialState={
     data:[],
     categorie:[]

}
const reducer=(state=initialState,action)=>{ 

    switch(action.type){
        case "modify_categorie":
            return {...state,categorie:(action.categorie)}
        case "modify_data":
            return {...state,data:(action.data)}
    }
    return state
}
export default reducer