import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getDetail } from '../action/detailAction'
import { useDispatch, useSelector } from 'react-redux'
import myimage from '../assets/images/me.png'
const Home = () => {
    const dispatch=useDispatch()
    const detail = useSelector(state => state.detail)
    // console.log(detail)
    useEffect(()=>{
        dispatch(getDetail())
    },[dispatch])
    

    return (
        <div className="home">
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="header-content">
                            <div className="header-section">
                                <h1>I am {detail.detaildata.basics?.name || "Name"}</h1>
                                <p>
                                    I am an {detail.detaildata.basics?.label || "Labels"}
                                </p>
                                {/* <span className="header-button">
                                    <Button variant="link" className="portfolio-button">
                                        Portfolio
                                    </Button>
                                </span> */}
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} lg={6}>
                        <div className="man-image">
                        <img src={myimage} alt="man" height="300px" width="300px" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home
