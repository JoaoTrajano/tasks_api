import { TaskEntity } from '../entities/task.entity';

export abstract class TaskRepository {
  abstract save(task: TaskEntity): Promise<TaskEntity>;
  abstract delete(id: string): Promise<void>;
  abstract fetch(title?: string, description?: string): Promise<TaskEntity[]>;
  abstract fetchAll(): Promise<TaskEntity[]>;
  abstract fetchById(id: string): Promise<TaskEntity | null>;
}
