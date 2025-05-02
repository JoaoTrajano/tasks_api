import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { afterAll, beforeAll, describe, test } from 'vitest';

import { AppModule } from '@/app.module';

describe('CreateTaskController e2e test', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /tasks', () => {
    test('should be able return a entity task created', async () => {
      const res = await request(app.getHttpServer()).post('/tasks').send({
        title: 'New task',
        description: 'This is a new task',
      });
      console.log(res.body);
      console.log('teste');
      // expect(res.statusCode).toBe(201);
      // expect(res.text).toContain('Hello');
    });
  });
});
