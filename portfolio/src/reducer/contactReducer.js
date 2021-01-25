const initialState={
    loading:false,
    contactdata:[],
    error:""
}
const contactReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CONTACT_DETAIL_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'CONTACT_DETAIL_SUCCESS':
            return{
                ...state,
                laoding:false,
                contactdata:action.payload,
                error:""
            }
        case 'CONTACT_DETAIL_FAILURE':
            return{
                ...state,
                loading:false,
                contactdata:[],
                error:action.payload
            }
    }
}
export default contactReducer