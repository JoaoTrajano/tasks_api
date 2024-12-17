import { Module } from "@nestjs/common";
import { CreateTaskUseCase } from "application/usecases/task";
import { DataBaseModule } from "infrastructure/database/database.module";

import { TaskController } from "./controllers";

@Module({
  imports: [DataBaseModule],
  providers: [CreateTaskUseCase],
  controllers: [TaskController],
})
export class HttpModule {}
