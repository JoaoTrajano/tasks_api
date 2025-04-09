import { Module } from '@nestjs/common';
import { EnvModule } from '@/shared/infrastructure/env/env.module';
import { TasksModule } from 'tasks/tasks.module';

@Module({
  imports: [EnvModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
