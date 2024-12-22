export interface TaskRequestBody {
    title: string;
    color: string;
    completed?: boolean;
  }
  
export interface UpdateTaskParams {
    id: string; // Since params are always strings
  }