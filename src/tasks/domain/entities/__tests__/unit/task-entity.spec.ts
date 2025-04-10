import { describe, expect, it } from 'vitest';
import { TaskEntity } from '../../task.entity';

describe('TaskEntity', () => {
  it('should be able to create a task entity', () => {
    const task = new TaskEntity('This is a test task', 'Test Task');
    expect(task).toBeInstanceOf(TaskEntity);
  });

  it('should be able mark as completed', () => {
    const task = new TaskEntity('This is a test task', 'Test Task');
    task.markAsCompleted();
    expect(task.completedAt).toBeInstanceOf(Date);
  });
});
