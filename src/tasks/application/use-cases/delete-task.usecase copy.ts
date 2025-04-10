import { TaskEntity } from 'tasks/domain/entities/task.entity';
import { TaskRepository } from 'tasks/domain/repositories/task.repository';

import { UseCase } from '../use-case.interface';
import { Injectable } from '@nestjs/common';

type DeleteTaskUseCaseInput = {
  id: string;
};

@Injectable()
export class DeleteTaskUseCase
  implements UseCase<DeleteTaskUseCaseInput, unknown>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(input: DeleteTaskUseCaseInput) {
    await this.taskRepository.delete(input.id);
  }
}
