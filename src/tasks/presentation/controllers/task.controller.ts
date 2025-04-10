import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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
} from 'tasks/application/use-cases';
import {
  CreateTaskBody,
  CreateTaskBodyPipe,
  FetchTasksQueryParams,
  FetchTasksQueryParamsPipe,
} from 'tasks/presentation/pipes/validations';
import { UpdateTaskBody } from '../pipes/validations/update-task';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly fetchTasksUseCase: FetchAllTasksUseCase,
    private readonly updateCompletedTaskUseCase: UpdateCompletedTaskUseCase,
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
