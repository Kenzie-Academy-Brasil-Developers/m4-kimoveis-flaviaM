import { z } from "zod";
import { loginSchemaData } from "../schemas/login.schemas";

type TLoginData = z.infer<typeof loginSchemaData>;

export { TLoginData };
