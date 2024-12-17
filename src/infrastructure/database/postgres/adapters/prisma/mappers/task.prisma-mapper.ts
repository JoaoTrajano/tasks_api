import { Prisma, Task as PrismaTask } from "@prisma/client";
import { Task } from "domain/entities/task.entity";

export class TaskPrismaMapper {
  static toDomain(entity: PrismaTask): Task {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      completedAt: entity.completedAt,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toPersistence(entity: Task): Prisma.TaskUncheckedCreateInput {
    return {
      title: entity.title,
      description: entity.description,
      completedAt: entity.completedAt,
    };
  }
}
