import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
} from '@nestjs/common';

import {
  CreateTaskUseCase,
  DeleteTaskUseCase,
  FetchAllTasksUseCase,
  UpdateCompletedTaskUseCase,
  UpdateTaskUseCase,
} from '@/tasks/application/use-cases';

import {
  CreateTaskBody,
  CreateTaskBodyPipe,
  FetchTasksQueryParams,
  FetchTasksQueryParamsPipe,
  UpdateTaskBody,
} from '../pipes/validations';

@Controller('tasks')
export class TaskController {
  constructor(
    @Inject('CreateTaskUseCase')
    private readonly createTaskUseCase: CreateTaskUseCase,
    @Inject('UpdateTaskUseCase')
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    @Inject('DeleteTaskUseCase')
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    @Inject('FetchAllTasksUseCase')
    private readonly fetchTasksUseCase: FetchAllTasksUseCase,
    @Inject('UpdateCompletedTaskUseCase')
    private readonly updateCompletedTaskUseCase: UpdateCompletedTaskUseCase,
  ) {}

  @Post()
  @HttpCode(201)
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

  @Put(':id/update')
  async updateTask(@Param('id') id: string, @Body() body: UpdateTaskBody) {
    const { task } = await this.updateTaskUseCase.execute({
      id,
      title: body.title,
      description: body.description,
    });
    return task;
  }

  @HttpCode(204)
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    await this.deleteTaskUseCase.execute({ id });
  }

  @Patch(':id/completed')
  async patchTask(@Param('id') id: string) {
    const { task } = await this.updateCompletedTaskUseCase.execute({ id });
    return task;
  }
}
