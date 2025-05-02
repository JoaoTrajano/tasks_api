import { TaskRepository } from '@/tasks/domain/repositories/task.repository';

import { UseCase } from '../use-case.interface';

type DeleteTaskUseCaseInput = {
  id: string;
};

export class DeleteTaskUseCase
  implements UseCase<DeleteTaskUseCaseInput, unknown>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(input: DeleteTaskUseCaseInput) {
    await this.taskRepository.delete(input.id);
  }
}
