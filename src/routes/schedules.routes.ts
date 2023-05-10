import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/users/ensureDataIsValid.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/validateToken/ensureTokenIsValid.middleware";
import {
  createSchedulesController,
  getSchedulesController,
} from "../controllers/schedules.controllers";
import { createSchemaScheduleData } from "../schemas/schedules.schemas";
import ensureIsAdminMiddleware from "../middlewares/validateToken/ensureIsAdmin.middleware";
import { validScheduleMiddlewares } from "../middlewares/schedules/scheduleValidation.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(createSchemaScheduleData),
  validScheduleMiddlewares,
  createSchedulesController
);

schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  getSchedulesController
);

export default schedulesRoutes;
