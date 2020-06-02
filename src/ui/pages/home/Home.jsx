import React, {
    useEffect, useState
} from 'react';
import AppBar from '../../components/app-bar/AppBar';
import Page from '../../components/page/Page';
import Task from '../../components/task/Task';
import Dialog from '../../components/dialog/Dialog';
import CreateTaskForm from '../../components/create-task-form/CreateTaskForm';
import NotTaskComponent from '../../components/not-task-component/NotTaskComponent';
import { 
    getTasks,
    update,
    deleteTask,
    createTask,
    deleteMultiTask,
    completeMultiTask,
    uncompleteMultiTask,
} from '../../../services/TaskService';
    
    

const Home = () => {

    const [tasks, setTasks] = useState([]);
    const [createDialog, setCreateDialog] = useState(false);
    const [loadingDialog, setLoadingDialog] = useState(false);
    const [errorDialog, setErrorDialog] = useState(false);
    const [seletedTask, setSeletedTask] = useState(null);
    const [multiSelectedTask, setMultiSelectedTask] = useState({});

    
    const errorHandler = (error) => {
        setLoadingDialog(false);
        setErrorDialog(true);
        console.log(error);
    };

    const responseHandler = (res) => {
        setTasks(res.tasks);
        setTimeout(()=>{
            setLoadingDialog(false);
        }, 500);
        
    };
    
    useEffect(()=>{
        setLoadingDialog(true);
        getTasks().then((res)=>{
            responseHandler(res);
            window.scroll(0, 0);
        }).catch((error) => {
            errorHandler(error);
        });
    },[]);

    const onOpenCreateDialog = ()=>{
        setCreateDialog(true);
    }
    const onCloseCreateDialog = ()=>{
        setSeletedTask(null);
        setCreateDialog(false);
    }

    const onCloseErrorDialog = ()=>{
        setErrorDialog(false);
    }

    const onUpdate = (task)=>{
        setLoadingDialog(true);
        update(task).then((res)=>{
            responseHandler(res);
        }).catch((error) => {
            errorHandler(error);
        });
    };

    const onCreate = (task)=>{
        onCloseCreateDialog();
        setLoadingDialog(true);
        createTask(task).then((res)=>{
            responseHandler(res);
        }).catch((error) => {
            errorHandler(error);
        });
    }

    const onEdit = (task)=>{
        setSeletedTask(task);
        onOpenCreateDialog();
    }

    const onDelete = (id)=>{
        setLoadingDialog(true);
        deleteTask(id).then((res)=>{
            responseHandler(res);
            onMultiSelectTaskUncheck({id});
        }).catch((error) => {
            errorHandler(error);
        });
    }

    const onDeleteMulti = ()=>{
        setLoadingDialog(true);
        deleteMultiTask(Object.values(multiSelectedTask)).then((res)=>{
            responseHandler(res);
            setMultiSelectedTask({});
        }).catch((error) => {
            errorHandler(error);
        });
    }

    const onCompleteMulti = ()=>{
        setLoadingDialog(true);
        completeMultiTask(Object.values(multiSelectedTask)).then((res)=>{
            responseHandler(res);
            setMultiSelectedTask({});
        }).catch((error) => {
            errorHandler(error);
        });
    }

    const onUncompleteMulti = ()=>{
        setLoadingDialog(true);
        uncompleteMultiTask(Object.values(multiSelectedTask)).then((res)=>{
            responseHandler(res);
            setMultiSelectedTask({});
        }).catch((error) => {
            errorHandler(error);
        });
    }

    const onMultiSelectTaskCheck = (task) => {
        setMultiSelectedTask({
            ...multiSelectedTask,
            [task.id]: task,
        })
    }

    const onMultiSelectTaskUncheck = (task) => {
        const tasks = {
            ...multiSelectedTask,
        };
        delete tasks[task.id];
        setMultiSelectedTask({
            ...tasks
        })
    }
    
    return (<>    
        <AppBar 
            anySelected={multiSelectedTask} 
            onCreate={onOpenCreateDialog} 
            onDelete={onDeleteMulti} 
            onComplete={onCompleteMulti} 
            onUncomplete={onUncompleteMulti}
        />
        <Page notTaskComponent={<NotTaskComponent />}>
            {tasks.map(task => (
                <Task 
                    key={task.id} 
                    checked={Boolean(multiSelectedTask[task.id])}
                    task={task} 
                    onEdit={onEdit} 
                    onUpdate={onUpdate} 
                    onDelete={onDelete}  
                    onMultiSelectTaskCheck={onMultiSelectTaskCheck}
                    onMultiSelectTaskUncheck={onMultiSelectTaskUncheck}
                />))}
        </Page>
        <Dialog title="Create Task" open={createDialog} onClose={onCloseCreateDialog}>
            <CreateTaskForm task={seletedTask} onCreate={onCreate}></CreateTaskForm>
        </Dialog>
        <Dialog title="Please wait..." open={loadingDialog} />
        <Dialog title="Something is not working, try later!" open={errorDialog} onClose={onCloseErrorDialog} />
    </>
    )
};


export default Home;
