import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDTO } from './dto/task.dto';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TaskService {
 
    constructor(@InjectModel('Task') private readonly taskModel:Model<Task>) {}
    
    async getTask(taskId: string):  Promise<Task> {
        const task = await this.taskModel.findById(taskId);
        return task;
    }

    async getTasks(): Promise<Task[]> {
        const tasks = await this.taskModel.find();
        return tasks;
    }

    async createTask(createTaskDTO:CreateTaskDTO): Promise<Task> {
        const task = new this.taskModel(createTaskDTO);
        await task.save();
        return task;
    }

    async updateTask(taskId:string, createTaskDTO:CreateTaskDTO): Promise<Task> {
        const updatedTask = await this.taskModel.findByIdAndUpdate(taskId, createTaskDTO, {new:true});
        return updatedTask;
    }

    async deleteTask(taskId:string): Promise<Task> {
        const deletedTask = await this.taskModel.findByIdAndDelete(taskId);
        return deletedTask;
    }

}
