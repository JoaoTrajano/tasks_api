import { Controller, Get } from "@nestjs/common";

import { CreateTaskUseCase } from "src/application/usecases/task";

@Controller()
export class TaskController {
  constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

  @Get()
  async teste(): Promise<string> {
    const { status } = await this.createTaskUseCase.execute({
      title: "teste",
      description: "",
    });

    return status;
  }
}
