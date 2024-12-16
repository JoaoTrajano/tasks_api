import { Module } from "@nestjs/common";

import { PrismaService } from "./postgres/adapters/prisma/prisma.service";
import { TaskPrismaRepository } from "./postgres/adapters/prisma/repositories";
import { TaskRepository } from "./repositories/task.repository";

@Module({
  providers: [
    PrismaService,
    { provide: TaskRepository, useClass: TaskPrismaRepository },
  ],
  exports: [TaskRepository],
})
export class DataBaseModule {}
