import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private taskService:TaskService) {}
    
    @Get('/:taskId')
    async getTask(@Res() res, @Param('taskId') taskId) {
        const task = await this.taskService.getTask(taskId);
        if (!task) throw new NotFoundException('This task does not exists'); 
        return res.status(HttpStatus.OK).json({
            message: "Success",
            task: task
        });
    }
    
    @Get('/')
    async getTasks(@Res() res) {
        const tasks = await this.taskService.getTasks();
        return res.status(HttpStatus.OK).json({
            message: "Success",
            tasks: tasks
        });
    }
    
    @Post('/')
    async createTask(@Res() res, @Body() createTaskDTO:CreateTaskDTO) {
        const task = await this.taskService.createTask(createTaskDTO);
        return res.status(HttpStatus.OK).json({
            message: "Success",
            task: task
        });
    }

    @Put('/:taskId')
    async updateTask(@Res() res, @Body() createTaskDTO:CreateTaskDTO, @Param('taskId') taskId) {
        const updatedTask = await this.taskService.updateTask(taskId, createTaskDTO);
        if (!updatedTask) throw new NotFoundException('This task does not exists'); 
        return res.status(HttpStatus.OK).json({
            message: "Success",
            updatedTask: updatedTask
        });
    }

    @Delete('/:taskId')
    async deleteTask(@Res() res, @Param('taskId') taskId) {
        const deletedTask = await this.taskService.deleteTask(taskId);
        if (!deletedTask) throw new NotFoundException('This task does not exists'); 
        return res.status(HttpStatus.OK).json({
            message: "Success",
            deletedTask: deletedTask
        });
    }

}
