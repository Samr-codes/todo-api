import prisma from '../prisma/prismaClient';

import { TaskRequestBody, UpdateTaskParams } from '../types/sharedTypes';


class TaskService {
  async getAllTasks() {
    return await prisma.task.findMany();
  }

  async createTask(data: TaskRequestBody) {
    return await prisma.task.create({ data });
  }

  async updateTask(id: number, data: TaskRequestBody) {
    return await prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: number) {
    return await prisma.task.delete({ where: { id } });
  }
}

export default new TaskService();
