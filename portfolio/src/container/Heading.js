import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const Heading = (props) => {
    console.log(props)
    return (
        <div>
            <Jumbotron>
                {props.head}
            </Jumbotron>
        </div>
    )
}

export default Heading
