import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import { PrismaService } from '@/shared/infrastructure/database/postgres/adapters/prisma/prisma.service';
import { TestAppModule } from '@/tasks/tests/test.module';

describe('CreateTaskController e2e test', () => {
  let app: INestApplication;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TestAppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.init();

    prismaService = moduleRef.get(PrismaService);
    await prismaService.cleanDatabase();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /tasks', () => {
    it('should be able return a entity task created', async () => {
      const res = await request(app.getHttpServer()).post('/tasks').send({
        title: 'Test Task',
        description: 'Test Description',
      });
      console.log(res.body);
      expect(res.statusCode).toBe(204);
      //   expect(res.text).toContain('Hello');
    });
  });
});
