import { z } from "zod";
import {
  allSchemaData,
  createSchemaData,
  returnSchemaData,
} from "../schemas/users.schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type TCreate = z.infer<typeof createSchemaData>;

type TReturn = z.infer<typeof returnSchemaData>;

type TAll = z.infer<typeof allSchemaData>;

type TUpdate = DeepPartial<TCreate>;

type TRepository = Repository<User>;

export { TCreate, TReturn, TAll, TUpdate, TRepository };
