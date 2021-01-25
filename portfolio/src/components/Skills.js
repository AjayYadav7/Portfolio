import React, { useEffect } from 'react'
import { Container, Jumbotron, ProgressBar } from 'react-bootstrap'
// import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../action/detailAction'

const Skills = () => {
    const dispatch=useDispatch()
    const detail = useSelector(state => state.detail)
    useEffect(()=>{
        dispatch(getDetail())
    },[dispatch])
    return (
        <div className="skills">
            <Jumbotron className="skill-header">
                <h1>Skills</h1>
            </Jumbotron>
            <Container>
                {
                    detail.detaildata &&
                    detail.detaildata.skills?.map(item=>
                <div className="skill-icon-tab">
                    <p>{item.name}</p>
                    <p className="progress-bar"><ProgressBar variant="danger" now={item.rating*20} label={`${item.rating*20}%`} />
                    </p>
                </div>
                )}
            {/* <Row>
                <Col>
                    <div className="skill-icon-tab text-center">
                        <FaReact className="skill-icons" />
                        <p>React</p>
                    </div>
                </Col>
                <Col>
                    <div className="skill-icon-tab text-center">
                        <FaHtml5 className="skill-icons" />
                        <p>HTML5</p>
                    </div>
                </Col>
                <Col>
                    <div className="skill-icon-tab text-center">
                        <FaCss3 className="skill-icons" />
                        <p>CSS3</p>
                    </div>
                </Col>
                <Col>
                    <div className="skill-icon-tab text-center">
                        <FaJs className="skill-icons" />
                        <p>Javascript</p>
                    </div>
                </Col>
                <Col>
                    <div className="skill-icon-tab text-center">
                        <FaBootstrap className="skill-icons" />
                        <p>Bootstrap</p>
                    </div>
                </Col>
                <Col>
                    <div className="skill-icon-tab text-center">
                        <FaSass className="skill-icons" />
                        <p>Sass</p>
                    </div>
                </Col>
            </Row> */}
            </Container>
        </div>
    )
}

export default Skills
