import { Request, Response, NextFunction } from "express";
import { AppError } from "../../error";

const ensurePermissionIsAdminUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const idParam: number = parseInt(req.body.id);
  const { admin, id } = req.user;
  if (!admin) {
    if (idParam !== id) {
      throw new AppError("Insufficient permission", 403);
    }
    const { admin, ...payload } = req.body;

    req.body = {
      ...payload,
    };
  }
  return next();
};

export default ensurePermissionIsAdminUserMiddleware;
