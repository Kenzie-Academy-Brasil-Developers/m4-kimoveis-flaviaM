import { Router } from "express";
import {
  createPropertyController,
  getPropertiesController,
} from "../controllers/realEstate.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/validateToken/ensureTokenIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/validateToken/ensureIsAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/users/ensureDataIsValid.middleware";
import { createSchemaRealEstateData } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureDataIsValidMiddleware(createSchemaRealEstateData),
  createPropertyController
);

realEstateRoutes.get("", getPropertiesController);

export default realEstateRoutes;
