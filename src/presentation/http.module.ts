import { Module } from "@nestjs/common";

import { TaskController } from "./controllers";
import { CreateTaskUseCase } from "src/application/usecases/task";
import { DataBaseModule } from "src/infrastructure/database/database.module";

@Module({
  imports: [DataBaseModule],
  providers: [CreateTaskUseCase],
  controllers: [TaskController],
})
export class HttpModule {}
