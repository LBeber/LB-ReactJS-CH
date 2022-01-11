import React from 'react'
import { Row } from 'react-bootstrap';
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {

    return (
        <Row className='m-5 text-center'>
            <PropagateLoader color={"#404036"} loading={true}  size={15} />
        </Row>
    )
}

export default Loader