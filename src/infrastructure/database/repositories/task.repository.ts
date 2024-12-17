import { Task } from "domain/entities/task.entity";

export abstract class TaskRepository {
  abstract save(task: Task): Promise<Task>;
  abstract delete(id: string): Promise<void>;
  abstract fetchAll(): Promise<Task[]>;
  abstract fetchById(id: string): Promise<Task | null>;
}
