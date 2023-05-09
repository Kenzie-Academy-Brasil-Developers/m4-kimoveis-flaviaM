import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";

const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const idParam = parseInt(req.params.id);
  const findUser = await userRepository.findOne({
    where: {
      id: idParam,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  return next();
};

export default ensureUserExistsMiddleware;
