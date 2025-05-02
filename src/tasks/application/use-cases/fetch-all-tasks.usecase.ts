import { TaskEntity } from '@/tasks/domain/entities/task.entity';
import { TaskRepository } from '@/tasks/domain/repositories/task.repository';

import { UseCase } from '../use-case.interface';

export type FetchAllTasksUseCaseInput = {
  title?: string;
  description?: string;
};

export type FetchAllTasksUseCaseOutput = {
  tasks: TaskEntity[];
};

export class FetchAllTasksUseCase
  implements UseCase<FetchAllTasksUseCaseInput, FetchAllTasksUseCaseOutput>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(
    input: FetchAllTasksUseCaseInput,
  ): Promise<FetchAllTasksUseCaseOutput> {
    const tasks = await this.taskRepository.fetch(
      input.title,
      input.description,
    );

    return { tasks };
  }
}
