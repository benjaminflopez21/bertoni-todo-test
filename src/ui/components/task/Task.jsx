import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({
    checked,
    task,
    onEdit,
    onUpdate,
    onDelete,
    onMultiSelectTaskCheck,
    onMultiSelectTaskUncheck,
}) => {

    const toggle = () => {
        onUpdate({
            ...task,
            completed: !task.completed,
        });
    }

    const edit = () => {
        onEdit(task);
    }

    const deleteTask = () => {
        onDelete(task.id);
    }

    const onSelected = (event) => {
        if(event.target.checked){
            onMultiSelectTaskCheck(task);
        }
        else {
            onMultiSelectTaskUncheck(task);
        }
    }
    
    return (
        <div className="task">
            <div className="innerTask">
                <div className="check-container">
                    <input type="checkbox" checked={checked} onChange={onSelected}/>
                </div>
                <div className="central-container">
                    <h2 className="title">
                        {task.name} 
                        <span className="created-on">{`(${new Date(task.createdOn).toLocaleString()})`}</span>
                    </h2>
                    {task.completed ? <span className="button completed" onClick={toggle}>
                        Completed
                        </span>:<span className="button uncompleted" onClick={toggle}>
                            Uncompleted
                        </span>}
                    
                </div>
                <div className="actions">
                    <span className="button edit" onClick={edit}>
                        Edit
                    </span>
                    <br/>
                    <span className="button delete" onClick={deleteTask}>
                        Delete
                    </span>
                </div>
            </div>
        </div>
    )
};

Task.propTypes = {
    checked: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMultiSelectTaskCheck: PropTypes.func.isRequired,
    onMultiSelectTaskUncheck: PropTypes.func.isRequired,
}

export default Task;
