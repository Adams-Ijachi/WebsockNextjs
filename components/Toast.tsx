import React from "react";


const Toast = ({ message, autohide, showToast,closeToast, handleRequest, showButton  }) => {

  return (
  <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "11"}}>
            <div id="liveToast" className={`toast ${showToast} `} data-bs-autohide={autohide} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                <strong className="me-auto">Ride Request</strong>
            
                <button type="button" className="btn-close" onClick={closeToast} ></button>
                </div>
                <div className="toast-body">
                {message}

                <div className="mt-2 pt-2 border-top">

                    {
                        showButton && <> <button type="button" style={{marginRight:"2px"}} onClick={() => handleRequest(true)} className="btn btn-primary btn-sm mr-2">Accept</button>
                        <button type="button" className="btn btn-secondary btn-sm ml-2"  onClick={() => handleRequest(false)}>Reject</button> </>
                    }
                   
                </div>
                </div>
               
            </div>
    </div>
    );
}

export default Toast;