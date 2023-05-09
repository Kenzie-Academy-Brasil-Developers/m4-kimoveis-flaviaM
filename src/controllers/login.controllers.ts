import { Request, Response } from "express";
import { tLoginRequest } from "../interfaces/login.interfaces";
import createLoginService from "../services/login/login.service";

const createLoginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: tLoginRequest = req.body;

  const token = await createLoginService(loginData);

  return res.json({ token: token });
};

export { createLoginController };
