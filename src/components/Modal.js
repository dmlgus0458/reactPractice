// rface
import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="list">
                <h4> {props.titleName[props.titleNum]} </h4>
                <p> 내용 </p>
                <p> 내용 </p>
            </div>
        </div>
    );
};

export default Modal;
