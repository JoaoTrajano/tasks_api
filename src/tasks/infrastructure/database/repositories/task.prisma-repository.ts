import { TaskEntity } from 'tasks/domain/entities/task.entity';
import { TaskRepository } from 'tasks/domain/repositories/task.repository';

import { TaskPrismaMapper } from '../mappers/task.prisma-mapper';
import { PrismaService } from '@/shared/infrastructure/database/postgres/adapters/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskPrismaRepository implements TaskRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(task: TaskEntity): Promise<TaskEntity> {
    const taskCreated = await this.prismaService.task.create({
      data: TaskPrismaMapper.toPersistence(task),
    });

    return TaskPrismaMapper.toDomain(taskCreated);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.task.delete({ where: { id } });
  }

  async fetch(title?: string, description?: string): Promise<TaskEntity[]> {
    const where = {};

    if (title) Object.assign(where, { title });
    if (description) Object.assign(where, { description });

    const tasks = await this.prismaService.task.findMany({
      where,
    });

    return tasks.map(TaskPrismaMapper.toDomain);
  }

  async fetchAll(): Promise<TaskEntity[]> {
    const tasks = await this.prismaService.task.findMany({});
    return tasks.map(TaskPrismaMapper.toDomain);
  }

  async fetchById(id: string): Promise<TaskEntity | null> {
    const task = await this.prismaService.task.findUnique({ where: { id } });
    return task ? TaskPrismaMapper.toDomain(task) : null;
  }
}
