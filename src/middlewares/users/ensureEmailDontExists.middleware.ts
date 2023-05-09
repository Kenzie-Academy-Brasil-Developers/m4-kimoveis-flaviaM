import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";

const ensureEmailDontExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  // const userEmail = req.body.email;
  // if (userEmail) {
  const findEmail = await userRepository.findOne({
    // withDeleted: true,
    where: {
      email: req.body.email,
    },
  });
  if (findEmail) {
    throw new AppError("Email already exists", 409);
  }
  // }
  return next();
};

export default ensureEmailDontExistsMiddleware;
