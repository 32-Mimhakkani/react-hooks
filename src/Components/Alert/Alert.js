import React, { useState } from 'react';

const Alert = (props) => {

    
 //console.log('alerts props is here',props.alerts.mess);

    return (
        <div className={`alert alert-${props?.alerts?.type} alert-dismissible fade show`} role="alert">
            <strong>{props?.alerts?.mess}  </strong> 
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    );
};

export default Alert;