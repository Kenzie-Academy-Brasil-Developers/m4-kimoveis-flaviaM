import { z } from "zod";
import {
  createSchemaAddressData,
  returnSchemaAddressData,
} from "../schemas/addresses.schemas";
import { DeepPartial, Repository } from "typeorm";
import { Address } from "../entities";

type TCreateAddress = z.infer<typeof returnSchemaAddressData>;

type TReturnAddress = DeepPartial<z.infer<typeof createSchemaAddressData>>;

type TRepositoryAddress = Repository<Address>;

export { TCreateAddress, TReturnAddress, TRepositoryAddress };
