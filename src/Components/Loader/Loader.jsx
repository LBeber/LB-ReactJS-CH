import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {

    return (
        <div className='row col-12 text-center m-5'>
            <PropagateLoader color={"#404036"} loading={true}  size={15} />
        </div>
    )
}

export default Loader