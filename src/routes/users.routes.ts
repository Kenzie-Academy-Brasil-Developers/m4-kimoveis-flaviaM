import { Router } from "express";
import { createSchemaData, updateSchemaData } from "../schemas/users.schemas";
import {
  createUserController,
  getAllUsersController,
  softDeleteUserController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValidMiddleware from "../middlewares/users/ensureDataIsValid.middleware";
import ensureEmailDontExistsMiddleware from "../middlewares/users/ensureEmailDontExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/validateToken/ensureTokenIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/validateToken/ensureIsAdmin.middleware";
import ensureUserExistsMiddleware from "../middlewares/users/ensureUserExists.middleware";
import ensurePermissionIsAdminUserMiddleware from "../middlewares/validateToken/ensurePermissionIsAdminUser.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createSchemaData),
  ensureEmailDontExistsMiddleware,
  createUserController
);

userRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  getAllUsersController
);

userRoutes.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensurePermissionIsAdminUserMiddleware,
  ensureDataIsValidMiddleware(updateSchemaData),
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureUserExistsMiddleware,
  ensureIsAdminMiddleware,
  softDeleteUserController
);

export default userRoutes;
