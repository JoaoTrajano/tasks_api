import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import {
  CreateTaskUseCase,
  FetchAllTasksUseCase,
} from 'tasks/application/use-cases';
import {
  CreateTaskBody,
  CreateTaskBodyPipe,
  FetchTasksQueryParams,
  FetchTasksQueryParamsPipe,
} from 'tasks/presentation/pipes/validations';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly fetchTasksUseCase: FetchAllTasksUseCase,
  ) {}

  @Post()
  @UsePipes(CreateTaskBodyPipe)
  async createTask(@Body() body: CreateTaskBody) {
    const { task } = await this.createTaskUseCase.execute({
      title: body.title,
      description: body.description,
    });

    return task;
  }

  @Get()
  @UsePipes(FetchTasksQueryParamsPipe)
  async fetchTasks(@Query() query: FetchTasksQueryParams) {
    const { tasks } = await this.fetchTasksUseCase.execute({
      description: query.description,
      title: query.title,
    });

    return tasks;
  }
}
