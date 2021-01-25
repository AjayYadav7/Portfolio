import axios from 'axios'
import Swal from 'sweetalert2'
export const contactDetail=(obj)=>{
    return(dispatch)=>{
        dispatch(contactDetailRequest())
        axios.post('https://ptsv2.com//t/nm2hr-1611192403/post')
        .then(response=>{
            console.log(response)
            if(response.request.status===200){
                Swal.fire({
                    title:"I will contact you ASAP",
                    text:"Thank you for showing interest in us.",
                    icon:'success',
                    showConfirmButton:false
                })
            dispatch(contactDetailSuccess(response))
            }
        })
        .catch(error=>{
            console.log("error",error.message)
            dispatch(contactDetailFailure(error))
        })
    }
}
export const contactDetailRequest=()=>{
    return{
        type:'CONTACT_DETAIL_REQUEST'
    }
}
export const contactDetailSuccess=(data)=>{
    return{
        type:'CONTACT_DETAIL_SUCCESS',
        payload:data
    }
}
export const contactDetailFailure=(error)=>{
    return{
        type:'CONTACT_DETAIL_FAILURE',
        payload:error
    }
}