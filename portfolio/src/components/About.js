import React, { useEffect } from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../action/detailAction'

const About = () => {
    const dispatch=useDispatch()
    const detail = useSelector(state => state.detail)
    useEffect(()=>{
        dispatch(getDetail())
    },[dispatch])
    return (
        <div className="about">
            <Jumbotron className="about-header">
                <h1>About</h1>
                <h3>{detail.detaildata.basics?.headline}</h3>
            </Jumbotron>
            <Row>
                <Col>

                </Col>
            </Row>
            <Container className="about-section">
                <Col><h3>Hi there</h3></Col>
                <p>
                   {detail.detaildata.basics?.summary}
                </p>
            </Container>
            <Container className="education-section">
                <h3>Education</h3>
                {
                    detail.detaildata.education?.map(item=>
                    <Col key={item.name}>
                        <li>{item.studyType} in {item.area} from {item.institution}</li>
                    </Col>
                        )
                }
            </Container>
        </div>
    )
}

export default About
