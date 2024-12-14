import { Module } from "@nestjs/common";

import { TaskController } from "./controllers";
import { CreateTaskUseCase } from "src/application/usecases/task";

@Module({controllers: [TaskController], providers: [CreateTaskUseCase]})
export class HttpModule{}