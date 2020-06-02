import React from 'react';
import PropTypes from 'prop-types';
import './Dialog.css';

const Dialog = ({title, open, onClose, children}) => {

    const stopClose = (event) => {
        event.stopPropagation();
    }
        
    return (<>
        {open && <div className="dialog" onClick={onClose}>
            <div className="inner-dialog" onClick={stopClose}>
                <div className="dialog-head">
                    <h1 className="dialog-title">{title}</h1>
                    {onClose && <span className="close-btn" onClick={onClose}>X</span>}
                </div>
                
                <div>
                    {children}
                </div>
            </div>
        </div>}
        </>
    )
};

Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default Dialog;
