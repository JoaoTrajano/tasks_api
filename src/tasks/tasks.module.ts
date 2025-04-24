import { Module } from '@nestjs/common';

import { PrismaService } from '@/shared/infrastructure/database/postgres/adapters/prisma/prisma.service';

import {
  CreateTaskUseCase,
  DeleteTaskUseCase,
  FetchAllTasksUseCase,
  UpdateCompletedTaskUseCase,
  UpdateTaskUseCase,
} from './application/use-cases';
import { TaskRepository } from './domain/repositories/task.repository';
import { TaskPrismaRepository } from './infrastructure/database/prisma/repositories/task-prisma-repository';
import { TaskController } from './presentation/controllers/task.controller';

@Module({
  controllers: [TaskController],
  providers: [
    PrismaService,
    {
      provide: TaskRepository,
      useClass: TaskPrismaRepository,
    },
    CreateTaskUseCase,
    FetchAllTasksUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    UpdateCompletedTaskUseCase,
  ],
  exports: [TaskRepository],
})
export class TasksModule {}
