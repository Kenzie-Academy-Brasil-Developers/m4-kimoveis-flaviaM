import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import ensureDataIsValidMiddleware from "../middlewares/users/ensureDataIsValid.middleware";
import { loginSchemaData } from "../schemas/login.schemas";
const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureDataIsValidMiddleware(loginSchemaData),
  createLoginController
);

export default loginRoutes;
