import { Request, Response, NextFunction } from "express";
import { AppError } from "../../error";

const ensureIsAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const user = req.user.admin;

  if (user === false) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};

export default ensureIsAdminMiddleware;
