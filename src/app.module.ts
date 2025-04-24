import { Module } from '@nestjs/common';
import { TasksModule } from 'tasks/tasks.module';

import { EnvModule } from '@/shared/infrastructure/env/env.module';

@Module({
  imports: [EnvModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
