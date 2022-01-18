import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as TaskServer from './TaskServer';

const TaskItem = ({task, listTasks}) => {
    
    const navigate=useNavigate();
    
    const handleDelete = async (taskId) => {
        await TaskServer.deleteTask(taskId);
        listTasks();
    };

    return (
        <div className="col-md-4 mb-2">
            <div className="card card-body text-white bg-success mb-3">
                <h3 className="card-title">{task.name}</h3>
                <p className="card-text">{task.body}</p>
                <button onClick={()=>navigate(`/edit/${task._id}`)} className="btn btn-primary">Edit task</button>
                <button onClick={()=>task._id && handleDelete(task._id)} className="btn btn-danger">Delete task</button>
            </div>
        </div>
    );
};

export default TaskItem;