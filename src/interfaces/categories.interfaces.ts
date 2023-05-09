import { z } from "zod";
import {
  allSchemaCategoryData,
  createSchemaCategoryData,
  returnSchemaCategoryData,
} from "../schemas/categories.schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type TCreateCategory = z.infer<typeof createSchemaCategoryData>;

type TReturnCategory = z.infer<typeof returnSchemaCategoryData>;

type TAllCategory = z.infer<typeof allSchemaCategoryData>;

type TRepositoryCategory = Repository<Category>;

export { TCreateCategory, TReturnCategory, TAllCategory, TRepositoryCategory };
