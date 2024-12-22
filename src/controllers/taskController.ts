import { Request, Response, NextFunction } from 'express';
import taskService from '../services/taskService';
import { TaskRequestBody, UpdateTaskParams } from '../types/sharedTypes';

type TypedRequestBody<T> = Request<{}, {}, T>;


class TaskController {
  async getTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await taskService.getAllTasks();
      if(tasks.length > 0) {
      res.status(200).json(tasks);
      }
      else { 
        res.status(200).json([]);

      }
    } catch (err) {
      next(err);
    }
  }

  createTask = async (req: TypedRequestBody<TaskRequestBody>, res: Response, next: NextFunction) => {
    try {
      const { title, color, completed } = req.body;
      if (!title || !color) {
        return res.status(400).json({ message: 'Title and color are required' });
      }
      const newTask = await taskService.createTask({ title, color, completed });
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  };


  async updateTask(  req: Request<UpdateTaskParams, {}, TaskRequestBody>, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, color, completed } = req.body;
      if (!title || !color) {
        return res.status(400).json({ message: 'Title and color are required' });
      }
      const updatedTask = await taskService.updateTask(parseInt(id), { title, color, completed });
      res.status(200).json(updatedTask);
    } catch (err) {
      next(err);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await taskService.deleteTask(parseInt(id));
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new TaskController();