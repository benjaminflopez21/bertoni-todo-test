const BASE_URL = process.env.REACT_APP_BASE_URL;
const getTasks = () => {
    return fetch(BASE_URL+'task/all')
    .then((resp) => resp.json()); 
}

const update = (task) => {
    return createTask(task);
}

const deleteTask = (id) => {
    return fetch(BASE_URL+'task/delete', {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify({id:id})
    })
    .then((resp) => resp.json()); 
}

const createTask = (task) => {
    return fetch(BASE_URL+'task/create', {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify({task: task})
    })
    .then((resp) => resp.json()); 
}

const deleteMultiTask = (tasks) => {
    return fetch(BASE_URL+'task/deletemulti', {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify({tasks: tasks})
    })
    .then((resp) => resp.json()); 
}

const completeMultiTask = (tasks) => {
    return fetch(BASE_URL+'task/completemulti', {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify({tasks: tasks})
    })
    .then((resp) => resp.json()); 
}

const uncompleteMultiTask = (tasks) => {
    return fetch(BASE_URL+'task/uncompletemulti', {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify({tasks: tasks})
    })
    .then((resp) => resp.json()); 
}

export {
    getTasks,
    update,
    deleteTask,
    createTask,
    deleteMultiTask,
    completeMultiTask,
    uncompleteMultiTask,
};