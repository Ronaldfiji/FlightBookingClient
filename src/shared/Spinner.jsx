import React, { Fragment } from "react";
import spinnerImg from '../assets/generic/loading.gif'
import  "./Spinner.css"



let Spinner = (props) => {
    return (
        <Fragment>
           
           {(props.Type === 1) ?
           <div className="loading_container_wrapper ">
            <div className="loader-container">
                <div className="spinner"></div>    
            </div>
            </div>
            :        
           <div >
                <img src={spinnerImg} alt="" style={{ width: '100px' }}
                    className="d-block m-auto" />
                     <p className="text-info  d-flex aligns-items-center justify-content-center">Loading... ... ...</p> 
            </div> 
           }
        </Fragment>
    )

}

export default Spinner;

// require('../../assets/genric/loading.gif')