import { z } from "zod";
import {
  createSchemaAddressData,
  returnSchemaAddressData,
} from "./addresses.schemas";
import { returnSchemaCategoryData } from "./categories.schemas";

const createSchemaRealEstateData = z.object({
  value: z.number().or(z.string()),
  size: z.number().int().positive(),
  sold: z.boolean().optional().default(false),
  address: createSchemaAddressData,
  categoryId: z.number().optional().nullish(),
});

const returnSchemaRealEstateData = createSchemaRealEstateData
  .extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: returnSchemaAddressData,
    category: returnSchemaCategoryData,
  })
  .omit({ categoryId: true });

const allSchemaEstateData = returnSchemaRealEstateData
  .omit({
    category: true,
  })
  .array();

export {
  createSchemaRealEstateData,
  returnSchemaRealEstateData,
  allSchemaEstateData,
};
