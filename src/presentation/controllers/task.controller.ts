import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { CreateTaskUseCase } from "application/usecases/task";
import { Task } from "domain/entities/task.entity";

import {
  CreateTaskBody,
  CreateTaskBodyPipe,
} from "../pipes/create-task-validations";

@Controller()
export class TaskController {
  constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

  @Post()
  @UsePipes(CreateTaskBodyPipe)
  async create(@Body() body: CreateTaskBody): Promise<Task> {
    const { task } = await this.createTaskUseCase.execute({
      title: body.title,
      description: body.description,
    });

    return task;
  }
}
