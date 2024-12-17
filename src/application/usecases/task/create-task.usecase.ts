import { Injectable } from "@nestjs/common";
import { Task } from "domain/entities/task.entity";
import { TaskRepository } from "infrastructure/database/repositories/task.repository";

import { UseCase } from "../usecase";

type CreateTaskUseCaseInput = {
  title: string;
  description: string;
};

type CreateTaskUseCaseOutput = {
  task: Task;
};

@Injectable()
export class CreateTaskUseCase
  implements UseCase<CreateTaskUseCaseInput, CreateTaskUseCaseOutput>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(
    input: CreateTaskUseCaseInput
  ): Promise<CreateTaskUseCaseOutput> {
    const task = new Task(input.description, input.title);

    const taskCreated = await this.taskRepository.save(task);
    return { task: taskCreated };
  }
}
