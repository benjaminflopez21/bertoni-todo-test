import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CreateTaskForm.css';

const CreateTaskForm = ({task, onCreate}) => {

    const [name, setName] = useState(task ? task.name:'');
    const [completed, setCompleted] = useState(task ? task.completed:false);

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onCompletedChange = (event) => {
        setCompleted(event.target.checked);
    }

    const onCreateTask = (event)=>{
        event.preventDefault();
        if(task){
            onCreate({
                ...task,
                completed,
                name,
            })
        }
        else{
            onCreate({
                completed,
                name,
            })
        }
    }
    
    return (<form onSubmit={onCreateTask}>
        <div className="form-line">
            <label htmlFor="name" className="label-form">Task Name</label>
            <input id="name" type="text" name="name" placeholder="task name" className="input-form" value={name} onChange={onNameChange} required/>
        </div>
        <div className="form-line">
            <label htmlFor="ncompleted" className="label-form">Completed</label>
            <input id="completed" type="checkbox" name="ncompleted" className="input-form" checked={completed} onChange={onCompletedChange}/>
        </div>

        {task && task.id && <div className="form-line">
            <label className="label-form">Created On:</label>
            <label className="label-p">{new Date(task.createdOn).toLocaleString()}</label>
        </div>}
        {task && task.id && <div className="form-line">
            <label className="label-form">Updated On:</label>
            <label className="label-p">{new Date(task.updatedOn).toLocaleString()}</label>
        </div>}
        <div className="form-line actions-btn">
            <button className="button create" type="submit">Save</button>
        </div>
    </form>
    )
};

CreateTaskForm.propTypes = {
task: PropTypes.object,
onCreate: PropTypes.func.isRequired,
}

CreateTaskForm.defaultProps= {
task: null,
}

export default CreateTaskForm;
