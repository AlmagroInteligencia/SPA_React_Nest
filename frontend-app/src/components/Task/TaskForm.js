import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as TaskServer from "./TaskServer";

const TaskForm = () => {
    
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    
    const initialState = {_id:"", name:"", body:""};
    
    const [task,setTask] = useState(initialState);

    const handleInputChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res;
            if(!params.id){
                res = await TaskServer.addTask(task);
                const data = await res.json();
                if (data.message === "Success") {   
                    setTask(initialState);
                }
            } else {
                await TaskServer.updateTask(params.id, task);
            }
            navigate('/');
            setTask(initialState);
        } catch (error) {
            console.log(error);
        }
    }; 
    
    const getTask = async (taskId) => {
        try {
            const res = await TaskServer.getTask(taskId);
            const data = await res.json();
            const {name, body} = data.task;
            setTask({name, body});
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        if(params.id){
            getTask(params.id);
        } 
    },[]);
    
    return (
        
                <div className="card text-white bg-primary mb-4">
                    <div className="card-body">
                        <form id="tarea-form">
                            <input type="hidden" id="id-task"/>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name-task" name="name" value={task.name} onChange={handleInputChange} placeholder="Task name"/>
                            </div>
                            <div className="form-group">
                                <textarea id="body-task" className="form-control" name="body" value={task.body} onChange={handleInputChange} placeholder="Task body" cols="60" rows="3"></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={handleSubmit} className="btn btn-dark text-center">Save Task</button>
                            </div>
                        </form>
                    </div>
                </div>

    )

};

export default TaskForm;