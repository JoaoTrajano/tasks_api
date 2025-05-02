import { TaskEntity } from '@/tasks/domain/entities/task.entity';
import { TaskRepository } from '@/tasks/domain/repositories/task.repository';

import { UseCase } from '../use-case.interface';

type UpdateTaskUseCaseInput = {
  id: string;
  title?: string;
  description?: string;
};

type UpdateTaskUseCaseOutput = {
  task: TaskEntity;
};

export class UpdateTaskUseCase
  implements UseCase<UpdateTaskUseCaseInput, UpdateTaskUseCaseOutput>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(
    input: UpdateTaskUseCaseInput,
  ): Promise<UpdateTaskUseCaseOutput> {
    const taskFound = await this.taskRepository.fetchById(input.id);
    if (!taskFound) throw new Error('Task not found');

    if (input.title) taskFound.title = input.title;
    if (input.description) taskFound.description = input.description;

    const taskUpdated = await this.taskRepository.update(taskFound);
    return { task: taskUpdated };
  }
}
