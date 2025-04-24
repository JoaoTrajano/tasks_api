import { beforeAll, describe, expect, it } from 'vitest';

import { TaskInMemoryRepository } from '@/tasks/infrastructure/database/in-memory/repositories/task-in-memory-repository';

import { CreateTaskUseCase } from '../../create-task.usecase';

let sut: CreateTaskUseCase;
let repo: TaskInMemoryRepository;

beforeAll(() => {
  repo = new TaskInMemoryRepository();
  sut = new CreateTaskUseCase(repo);
});

describe('CreateTaskUseCase unit test', () => {
  it('should be able create a task', async () => {
    const { task } = await sut.execute({
      title: 'Test Task',
      description: 'Test Description',
    });

    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Test Task');
    expect(task.description).toBe('Test Description');
  });

  it('should throw an error if the title is empty', async () => {
    await expect(
      sut.execute({
        title: '',
        description: 'Test Description',
      }),
    ).rejects.toThrowError('Title is required');
  });
  it('should throw an error if the description is empty', async () => {
    await expect(
      sut.execute({
        title: 'Test title',
        description: '',
      }),
    ).rejects.toThrowError('Description is required');
  });
});
