import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanDatabase() {
    const modelKeys = Reflect.ownKeys(this) as Array<keyof PrismaClient>;

    for (const modelKey of modelKeys) {
      const model = this[modelKey];

      if (typeof model === 'object' && model !== null && 'deleteMany' in model)
        await model.deleteMany();
    }
  }
}
