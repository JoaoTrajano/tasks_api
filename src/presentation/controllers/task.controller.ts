import { Controller, Get } from "@nestjs/common"

import { CreateTaskUseCase } from "src/application/usecases/task"

@Controller()
export class TaskController {
  constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

  @Get()
  teste(): string {
    return this.createTaskUseCase.teste
  }
}
