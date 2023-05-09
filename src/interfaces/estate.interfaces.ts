import { z } from "zod";
import {
  allSchemaEstateData,
  createSchemaRealEstateData,
  returnSchemaRealEstateData,
} from "../schemas/estate.schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type TCreateEstate = z.infer<typeof createSchemaRealEstateData>;

type TReturnEstate = z.infer<typeof returnSchemaRealEstateData>;

type TAllEstate = z.infer<typeof allSchemaEstateData>;

type TRepositoryEstate = Repository<RealEstate>;

export { TCreateEstate, TReturnEstate, TAllEstate, TRepositoryEstate };
