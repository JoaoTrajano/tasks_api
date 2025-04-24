import { TaskEntity } from '@/tasks/domain/entities/task.entity';
import { Injectable } from '@nestjs/common';
import { UseCase } from '../use-case.interface';
import { TaskRepository } from '@/tasks/domain/repositories/task.repository';

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
    if (!input.title) throw new Error('Title is required');
    if (!input.description) throw new Error('Description is required');

    const task = new TaskEntity(input.description, input.title);

    const taskCreated = await this.taskRepository.create(task);
    return { task: taskCreated };
  }
}
