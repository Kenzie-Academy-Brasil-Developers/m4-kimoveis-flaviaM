import { z } from "zod";
import { loginSchemaData } from "../schemas/login.schemas";

type TLogin = z.infer<typeof loginSchemaData>;

export { TLogin };
