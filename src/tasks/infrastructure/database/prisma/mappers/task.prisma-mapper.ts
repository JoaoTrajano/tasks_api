import { Prisma, Task as PrismaClientTask } from '@prisma/client';

import { TaskEntity } from '@/tasks/domain/entities/task.entity';

export class TaskPrismaMapper {
  static toDomain(entity: PrismaClientTask): TaskEntity {
    const taskEntitie = new TaskEntity(entity.description, entity.title);
    taskEntitie.id = entity.id;
    taskEntitie.completedAt = entity.completedAt;
    taskEntitie.createdAt = entity.createdAt;
    taskEntitie.updatedAt = entity.updatedAt;

    return taskEntitie;
  }

  static toPersistence(entity: TaskEntity): Prisma.TaskUncheckedCreateInput {
    return {
      title: entity.title,
      description: entity.description,
      completedAt: entity.completedAt,
    };
  }
}
