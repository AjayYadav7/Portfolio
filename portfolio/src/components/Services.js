import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'
const Services = () => {
    return (
        <div className="services">
            <Jumbotron className="services-heading">
                <h1>My Services</h1>
                <h3>My Services are as follows looking like you need an awesome content creator</h3>
            </Jumbotron>
            <Container>
            <Row>
                <Col sm={4}>
                    <div className="services-box">
                        <FaGithub className="icons"/>
                        <div className="services-box-header">
                            Frontend Development
                        </div>
                        <p>
                            Able to develope a good web development with HTML, CSS and javascript, jquery
                        </p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="services-box">
                        <FaGithub className="icons"/>
                        <div className="services-box-header">
                            WebApp Development
                        </div>
                        <p>
                            Develope a React based site with Bootstrap
                        </p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="services-box">
                        <FaGithub className="icons"/>
                        <div className="services-box-header">
                            windows App Development
                        </div>
                        <p>
                            Has Developed a Windows app with using Java's GUI interface.
                        </p>
                    </div>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default Services
