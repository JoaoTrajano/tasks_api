import { Task } from "domain/entities/task.entity";
import { TaskRepository } from "infrastructure/database/repositories/task.repository";

import { TaskPrismaMapper } from "../mappers/task.prisma-mapper";
import { PrismaService } from "../prisma.service";

export class TaskPrismaRepository implements TaskRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(task: Task): Promise<Task> {
    const taskCreated = await this.prismaService.task.create({
      data: TaskPrismaMapper.toPersistence(task),
    });

    return TaskPrismaMapper.toDomain(taskCreated);
  }

  async delete(id: string): Promise<void> {}

  async fetchAll(): Promise<Task[]> {
    const tasks = await this.prismaService.task.findMany({});
    return tasks.map(TaskPrismaMapper.toDomain);
  }

  async fetchById(id: string): Promise<Task | null> {
    const task = await this.prismaService.task.findUnique({ where: { id } });
    return task ? TaskPrismaMapper.toDomain(task) : null;
  }
}
