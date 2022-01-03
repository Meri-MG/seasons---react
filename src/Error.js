import React from "react";

const Error = (props) => {
    return (
        <div className="d-flex">
            <div className="red-text">{props.message}</div>
        </div>
    )
}
    
Error.defaultProps = {
    message: 'Loading...'
}
    
export default Error;
