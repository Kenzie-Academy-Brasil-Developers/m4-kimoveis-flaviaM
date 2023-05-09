import { z } from "zod";
import {
  allSchemaData,
  createSchemaData,
  returnSchemaData,
} from "../schemas/users.schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type TCreateUser = z.infer<typeof createSchemaData>;

type TReturnUser = z.infer<typeof returnSchemaData>;

type TAllUser = z.infer<typeof allSchemaData>;

type TUpdateUser = DeepPartial<TCreateUser>;

type TRepositoryUser = Repository<User>;

export { TCreateUser, TReturnUser, TAllUser, TUpdateUser, TRepositoryUser };
