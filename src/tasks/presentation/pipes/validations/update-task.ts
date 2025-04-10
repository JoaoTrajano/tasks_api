import { ZodValidationPipe } from '@/shared/pipes/zod-validation';
import { z } from 'zod';

const updateTaskBodySchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

export type UpdateTaskBody = z.infer<typeof updateTaskBodySchema>;

export const UpdateTaskBodyPipe = new ZodValidationPipe(updateTaskBodySchema);
