import express from 'express';
import taskRoutes from './routes/taskRoutes';
import errorHandler from './middlewares/errorHandler';

const app = express(); 

app.use(express.json()); 
app.use('/api', taskRoutes);
app.use(errorHandler); 

export default app;
