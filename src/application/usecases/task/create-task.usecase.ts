import { Injectable } from "@nestjs/common";
import { UseCase } from "../usecase";
import { TaskRepository } from "src/infrastructure/database/repositories/task.repository";

type CreateTaskUseCaseInput = {
  title: string;
  description: string;
};

type CreateTaskUseCaseOutput = {
  status: string;
};

@Injectable()
export class CreateTaskUseCase
  implements UseCase<CreateTaskUseCaseInput, CreateTaskUseCaseOutput>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(
    data: CreateTaskUseCaseInput
  ): Promise<CreateTaskUseCaseOutput> {
    console.log(data);
    return await { status: "ok" };
  }
}
