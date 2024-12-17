import { z } from "zod";

import { ZodValidationPipe } from "./zod-validation";

const createTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type CreateTaskBody = z.infer<typeof createTaskSchema>;

export const CreateTaskBodyPipe = new ZodValidationPipe(createTaskSchema);
