import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Jumbotron } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { contactDetail } from '../action/contactAction'
import Swal from 'sweetalert2'
import { getDetail } from '../action/detailAction'
// import { FaEnvelope } from 'react-icons/fa'
const Contact = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [msg,setMsg]=useState("")
    const dispatch=useDispatch()
    const detail = useSelector(state => state.detail)
    useEffect(()=>{
        dispatch(getDetail())
    },[dispatch])
    const validation=()=>{
        if(name===" "){
            Swal.fire({
                title:"Name cannot be left empty",
                icon:'warning',
                showConfirmButton:false
            })
            return false;
        }else if(msg===" "){
            Swal.fire({
                title:"Please fill the message box",
                icon:'warning',
                showConfirmButton:false,
            })
        }
        return true;
    }
    const handleDetail=(e)=>{
        e.preventDefault()
        const isValid=validation()
        if(isValid){
            let obj={'Name':name,"email address":email,"Message":msg}
            dispatch(contactDetail(obj))
        }
    }
    return (
        <div className="contact">
            <Jumbotron className="contact-header">
                <h1>Contact</h1>
            </Jumbotron>
            <div className="form">
                <Form onSubmit={handleDetail}>
                    <FormGroup controlId="name">
                        <FormLabel>Name*</FormLabel>
                        <FormControl type="text" required placeholder="Enter your name" value={name} onChange={e=>setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <FormLabel>Email*</FormLabel>
                        {/* <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text><FaEnvelope /> </InputGroup.Text>
                        </InputGroup.Prepend> */}
                        <FormControl type="email" required placeholder="Enter your email address"  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={e=>setEmail(e.target.value)} />
                        {/* </InputGroup> */}
                    </FormGroup>
                    <FormGroup controlId="msg">
                        <FormLabel>Message*</FormLabel>
                        <FormControl type="text" required placeholder="Enter your Message" value={msg} onChange={e=>setMsg(e.target.value)} />
                    </FormGroup>
                    <Button type="submit" className="btn-lg btn-success">Send</Button>
                </Form>
            </div>
            <hr color="#fff" />
            <div className="contact-info">
                {/* <Row> */}
                    <Col xs={4} sm={6}>
                        Contact details :
                        <p>Name : {detail.detaildata.basics?.name}</p>
                        <p>Phone : {detail.detaildata.basics?.phone}</p>
                        <p>Email-address : {detail.detaildata.basics?.email}</p>
                    </Col>
                {/* </Row> */}
            </div>
        </div>
    )
}

export default Contact
