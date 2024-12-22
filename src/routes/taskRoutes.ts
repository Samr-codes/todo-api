const express = require('express');
import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import taskController from '../controllers/taskController';
import { TaskRequestBody } from '../types/sharedTypes';

const router = express.Router();

// Route to get all tasks
router.get('/tasks', (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => taskController.getTasks(req, res, next));

// Route to create a new task
router.post('/tasks', (req: Request<{}, {}, TaskRequestBody, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => taskController.createTask(req, res, next));

// Route to update an existing task
router.put('/tasks/:id', (req: any, res: Response<any, Record<string, any>>, next: NextFunction) => taskController.updateTask(req, res, next));

// Route to delete a task
router.delete('/tasks/:id', (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => taskController.deleteTask(req, res, next));

export default router;
