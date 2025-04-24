import { z } from 'zod';

import { ZodValidationPipe } from '@/shared/pipes/zod-validation';

const fetchTasksQueryParamsSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
});

export type FetchTasksQueryParams = z.infer<typeof fetchTasksQueryParamsSchema>;

export const FetchTasksQueryParamsPipe = new ZodValidationPipe(
  fetchTasksQueryParamsSchema,
);
