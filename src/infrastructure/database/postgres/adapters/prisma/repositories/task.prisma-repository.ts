import { TaskRepository } from "src/infrastructure/database/repositories/task.repository";
import { PrismaService } from "../prisma.service";

export class TaskPrismaRepository implements TaskRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async save(): Promise<void> {}

  async delete(): Promise<void> {}

  async fetchAll(): Promise<void> {}

  async fetchById(): Promise<void> {}
}
