import { z } from "zod";
import {
  allSchemaEstateData,
  createSchemaRealEstateData,
  returnSchemaRealEstateData,
} from "../schemas/realEstate.schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type TCreateRealEstate = z.infer<typeof createSchemaRealEstateData>;

type TReturnRealEstate = z.infer<typeof returnSchemaRealEstateData>;

type TAllRealEstate = z.infer<typeof allSchemaEstateData>;

type TRepositoryRealEstate = Repository<RealEstate>;

export {
  TCreateRealEstate,
  TReturnRealEstate,
  TAllRealEstate,
  TRepositoryRealEstate,
};
