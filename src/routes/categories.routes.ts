import { Router } from "express";
import ensureTokenIsValidMiddleware from "../middlewares/validateToken/ensureTokenIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/validateToken/ensureIsAdmin.middleware";
import ensureDataIsValidMiddleware from "../middlewares/users/ensureDataIsValid.middleware";
import {
  createCategoryController,
  getAllCategoriesController,
  getRealEstateByCategoryController,
} from "../controllers/categories.controllers";
import ensureCategoryNameIsValidMiddleware from "../middlewares/categories/ensureCategoryNameIsValid.middleware";
import ensureCategoryIdExistMiddleware from "../middlewares/categories/ensureCategoryIdExist.middleware";
import { createSchemaCategoryData } from "../schemas/categories.schemas";

const categoryRoutes: Router = Router();

categoryRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureCategoryNameIsValidMiddleware,
  ensureDataIsValidMiddleware(createSchemaCategoryData),
  createCategoryController
);

categoryRoutes.get("", getAllCategoriesController);

categoryRoutes.get(
  "/:id/realEstate",
  ensureCategoryIdExistMiddleware,
  getRealEstateByCategoryController
);

export default categoryRoutes;
