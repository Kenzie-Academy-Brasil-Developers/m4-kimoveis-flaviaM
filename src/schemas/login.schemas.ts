import { z } from "zod";

const loginSchemaData = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { loginSchemaData };
