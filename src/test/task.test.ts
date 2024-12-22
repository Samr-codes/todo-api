import request from 'supertest';
import app from '../app';
import prisma from '../prisma/prismaClient';

describe('Task API', () => {
  beforeAll(async () => {
    await prisma.task.deleteMany(); // Clear tasks before tests
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('should create a new task', async () => {
    const response = await request(app).post('/api/tasks').send({
      title: 'Test Task',
      color: '#FFFFFF',
      completed: false,
    });
    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Test Task');
  });

  it('should fetch all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should update a task', async () => {
    const newTask = await prisma.task.create({
      data: { title: 'Task to Update', color: '#FF0000', completed: false },
    });

    const response = await request(app).put(`/api/tasks/${newTask.id}`).send({
      title: 'Updated Task',
      color: '#00FF00',
      completed: true,
    });
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Updated Task');
  });

  it('should delete a task', async () => {
    const newTask = await prisma.task.create({
      data: { title: 'Task to Delete', color: '#0000FF', completed: false },
    });

    const response = await request(app).delete(`/api/tasks/${newTask.id}`);
    expect(response.status).toBe(204);
  });
});
