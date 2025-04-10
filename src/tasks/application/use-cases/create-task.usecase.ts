import { TaskEntity } from 'tasks/domain/entities/task.entity';
import { TaskRepository } from 'tasks/domain/repositories/task.repository';

import { UseCase } from '../use-case.interface';
import { Injectable } from '@nestjs/common';

type CreateTaskUseCaseInput = {
  title: string;
  description: string;
};

type CreateTaskUseCaseOutput = {
  task: TaskEntity;
};

@Injectable()
export class CreateTaskUseCase
  implements UseCase<CreateTaskUseCaseInput, CreateTaskUseCaseOutput>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(
    input: CreateTaskUseCaseInput,
  ): Promise<CreateTaskUseCaseOutput> {
    const task = new TaskEntity(input.description, input.title);

    const taskCreated = await this.taskRepository.create(task);
    return { task: taskCreated };
  }
}
