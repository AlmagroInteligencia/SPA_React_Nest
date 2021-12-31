import React, { useEffect, useState } from 'react';

import TaskItem from './TaskItem';

import * as TaskServer from './TaskServer';

const TaskList=()=>{
    const [tasks,setTasks]=useState([]);
    
    const listTasks = async () => {
        try {
            const res = await TaskServer.listTasks();
            const data = await res.json();
            setTasks(data.tasks);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        listTasks();
    },);

    return (
        <div className="row">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} listTasks={listTasks}/>
            ))}
        </div>

    )
};

export default TaskList;