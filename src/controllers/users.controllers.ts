import { Request, Response } from "express";

import createUserService from "../services/users/createUser.service";
import getAllUsersService from "../services/users/getAllUsers.service";
import updateUserService from "../services/users/updateUser.service";
import softDeleteUserService from "../services/users/softDeleteUser.service";
import { TCreateUser, TUpdateUser } from "../interfaces/users.interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TCreateUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getAllUsersService();
  return res.json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUpdateUser = req.body;
  const idParam = parseInt(req.params.id);
  const updatedUser = await updateUserService(userData, idParam);
  return res.json(updatedUser);
};

const softDeleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const idParam = parseInt(req.params.id);
  await softDeleteUserService(idParam);
  return res.status(204).send();
};
export {
  createUserController,
  getAllUsersController,
  updateUserController,
  softDeleteUserController,
};
