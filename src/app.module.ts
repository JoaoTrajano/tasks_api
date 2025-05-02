import { Module } from '@nestjs/common';

import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [SharedModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
