export abstract class TaskRepository {
  abstract save(): Promise<void>;
  abstract delete(): Promise<void>;
  abstract fetchAll(): Promise<void>;
  abstract fetchById(): Promise<void>;
}
