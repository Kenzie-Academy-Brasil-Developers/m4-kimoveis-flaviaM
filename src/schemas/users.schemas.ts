import { z } from "zod";

const createSchemaData = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z
    .string()
    .min(4, "Password must contain at least 4 characters")
    .max(120),
  admin: z.boolean().optional().default(false),
});

const returnSchemaData = createSchemaData
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
  })
  .omit({ password: true });

const allSchemaData = returnSchemaData.array();

const updateSchemaData = createSchemaData.partial();

export { createSchemaData, returnSchemaData, allSchemaData, updateSchemaData };
