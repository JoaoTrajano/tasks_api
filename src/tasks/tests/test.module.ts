import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppModule } from '@/app.module';
import { PrismaService } from '@/shared/infrastructure/database/postgres/adapters/prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.test',
      isGlobal: true,
    }),
    AppModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class TestAppModule {}
