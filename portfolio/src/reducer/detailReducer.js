const initialState={
    loading:false,
    detaildata:[],
    error:""
}
const detailReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_DETAIL_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'GET_DETAIL_SUCCESS':
            return{
                ...state,
                loading:false,
                detaildata:action.payload,
                error:""
            }
        case 'GET_DETAIL_FAILURE':
            return{
                ...state,
                loading:false,
                detaildata:[],
                error:action.payload
            }
        default :
            return state
    }
}
export default detailReducer