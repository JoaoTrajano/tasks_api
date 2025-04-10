import { ZodValidationPipe } from '@/shared/pipes/zod-validation';
import { z } from 'zod';

const createTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type CreateTaskBody = z.infer<typeof createTaskSchema>;

export const CreateTaskBodyPipe = new ZodValidationPipe(createTaskSchema);
