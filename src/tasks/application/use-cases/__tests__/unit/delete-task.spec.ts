import { beforeAll, describe, expect, it } from 'vitest';

import { TaskEntity } from '@/tasks/domain/entities/task.entity';
import { TaskInMemoryRepository } from '@/tasks/infrastructure/database/in-memory/repositories/task-in-memory-repository';

import { DeleteTaskUseCase } from '../../delete-task.usecase';

let sut: DeleteTaskUseCase;
let repo: TaskInMemoryRepository;

beforeAll(() => {
  repo = new TaskInMemoryRepository();
  sut = new DeleteTaskUseCase(repo);
});

describe('DeleteTaskUseCase unit test', () => {
  it('should be able delete a task', async () => {
    repo.tasks.push(new TaskEntity('Test Task', 'Test Description'));

    await sut.execute({ id: repo.tasks[0].id });

    expect(repo.tasks.length === 0).toBeTruthy();
  });
});
