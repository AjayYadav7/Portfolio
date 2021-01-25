import axios from 'axios'
export const getDetail=()=>{
    return(dispatch)=>{
        dispatch(getDetailRequest())
        axios.get('https://gitconnected.com/v1/portfolio/ajayyadav7')
        .then(response=>{
            // console.log(response)
            dispatch(getDetailSuccess(response.data))
        })
        .catch(error=>{
            console.log("error",error.message)
            dispatch(getDetailFailure(error.message))
        })
    }
}
export const getDetailRequest=()=>{
    return{
        type:'GET_DETAIL_REQUEST'
    }
}
export const getDetailSuccess=(data)=>{
    return{
        type:'GET_DETAIL_SUCCESS',
        payload:data
    }
}
export const getDetailFailure=(error)=>{
    return{
        type:'GET_DETAIL_FAILURE',
        payload:error
    }
}