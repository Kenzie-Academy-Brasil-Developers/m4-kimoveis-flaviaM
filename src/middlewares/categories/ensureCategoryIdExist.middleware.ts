import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error";

const ensureCategoryIdExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category = await categoryRepository.findOne({
    where: {
      id: parseInt(req.params.id),
    },
  });
  if (!category) {
    throw new AppError("Category not found", 404);
  }
  return next();
};

export default ensureCategoryIdExistMiddleware;
