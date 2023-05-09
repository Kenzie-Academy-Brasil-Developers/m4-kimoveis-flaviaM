import { z } from "zod";
import { returnSchemaRealEstateData } from "./realEstate.schemas";
import { returnSchemaData } from "./users.schemas";

const createSchemaScheduleData = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
});

const returnSchemaScheduleData = createSchemaScheduleData.extend({
  id: z.number(),
  userId: z.number(),
});

const allSchemaScheduleData = returnSchemaScheduleData
  .extend({
    realEstate: returnSchemaRealEstateData,
    user: returnSchemaData,
  })
  .omit({
    realEstateId: true,
  });

export {
  createSchemaScheduleData,
  returnSchemaScheduleData,
  allSchemaScheduleData,
};
