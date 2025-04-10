import { Module } from '@nestjs/common';

import {
  CreateTaskUseCase,
  DeleteTaskUseCase,
  FetchAllTasksUseCase,
  UpdateCompletedTaskUseCase,
  UpdateTaskUseCase,
} from './application/use-cases';
import { TaskRepository } from './domain/repositories/task.repository';
import { TaskController } from './presentation/controllers/task.controller';
import { PrismaService } from '@/shared/infrastructure/database/postgres/adapters/prisma/prisma.service';
import { TaskPrismaRepository } from './infrastructure/database/prisma/repositories/task-prisma-repository';

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
