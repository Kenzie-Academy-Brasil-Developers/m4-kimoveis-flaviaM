import { z } from "zod";
import {
  allSchemaScheduleData,
  createSchemaScheduleData,
  returnSchemaScheduleData,
} from "../schemas/schedules.schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type TCreateSchedule = z.infer<typeof createSchemaScheduleData>;

type TReturnSchedule = z.infer<typeof returnSchemaScheduleData>;

type TAllSchedule = z.infer<typeof allSchemaScheduleData>;

type TRepositorySchedule = Repository<Schedule>;

export { TCreateSchedule, TReturnSchedule, TAllSchedule, TRepositorySchedule };
