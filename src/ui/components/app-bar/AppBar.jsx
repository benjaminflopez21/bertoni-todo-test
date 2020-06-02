import React from 'react';
import PropTypes from 'prop-types';
import './AppBar.css';

const AppBar = ({anySelected, onCreate, onUncomplete, onComplete, onDelete}) => {

    const hasAny = Object.keys(anySelected).length !== 0;
    
    return (
        <div className="app-bar">
            
            <div className="inner-app-bar">
            <h2 className="app-title">Todo - Bertoni</h2>
                {hasAny  ? <div className="actions">
                    <span className="button create" onClick={onComplete}>
                        Complete Selected
                    </span>
                    <span className="button uncompleted" onClick={onUncomplete}>
                        Uncomple Selected
                    </span>
                    <span className="button delete" onClick={onDelete}>
                        Delete Selected
                    </span>
                </div>
                :<div className="actions">
                    <span className="button create" onClick={onCreate}>
                        Create Task
                    </span>
                </div>
                }
            </div>
        </div>
    )
};

AppBar.propTypes = {
    anySelected: PropTypes.array.isRequired, 
    onCreate: PropTypes.func.isRequired,
    onUncomplete: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default AppBar;
