import React from 'react';



export default function modal(props) {
    return(
        <div className='modal'>
            <div className='modal-card'>
                <div className='modal-title'>
                    <h2>{props.projectTitle}</h2>
                </div>
                <div className='modal-body'>
                    <p>{props.projectDescription}</p>
                    <button className='close-button' onClick={props.handleModalOpen}>Close</button>
                </div>
            </div>
        </div>
    )
}