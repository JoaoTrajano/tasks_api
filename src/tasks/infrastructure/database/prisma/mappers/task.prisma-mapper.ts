import { Prisma, Task as PrismaClientTask } from '@prisma/client';
import { TaskEntity } from 'tasks/domain/entities/task.entity';

export class TaskPrismaMapper {
  static toDomain(entity: PrismaClientTask): TaskEntity {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      completedAt: entity.completedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toPersistence(entity: TaskEntity): Prisma.TaskUncheckedCreateInput {
    return {
      title: entity.title,
      description: entity.description,
      completedAt: entity.completedAt,
    };
  }
}
