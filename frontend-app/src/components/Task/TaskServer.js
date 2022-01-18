const API_URL="http://localhost:8000/task/";

export const listTasks = async () => {
    return await fetch(API_URL);
};

export const getTask = async (taskId) => {
    return await fetch(`${API_URL}${taskId}`);
};

export const addTask = async (newTask) => {
    return await fetch(API_URL,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newTask.name).trim(),
            "body": String(newTask.body).trim()
        })
        
    });
};

export const updateTask = async (taskId, updatedTask) => {
    return await fetch(`${API_URL}${taskId}`,{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedTask.name).trim(),
            "body": String(updatedTask.body).trim()
        })
        
    });
};

export const deleteTask = async (taskId) => {
    return await fetch(`${API_URL}${taskId}`,{
        method:"DELETE"        
    });
};