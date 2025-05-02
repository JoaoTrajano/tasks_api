import { TaskEntity } from '@/tasks/domain/entities/task.entity';
import { TaskRepository } from '@/tasks/domain/repositories/task.repository';

import { UseCase } from '../use-case.interface';

type UpdateCompletedTaskUseCaseInput = {
  id: string;
};

type UpdateCompletedTaskUseCaseOutput = {
  task: TaskEntity;
};

export class UpdateCompletedTaskUseCase
  implements
    UseCase<UpdateCompletedTaskUseCaseInput, UpdateCompletedTaskUseCaseOutput>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(
    input: UpdateCompletedTaskUseCaseInput,
  ): Promise<UpdateCompletedTaskUseCaseOutput> {
    const taskFound = await this.taskRepository.fetchById(input.id);
    if (!taskFound) throw new Error('Task not found');

    taskFound.markAsCompleted();

    const taskUpdated = await this.taskRepository.update(taskFound);
    return { task: taskUpdated };
  }
}
