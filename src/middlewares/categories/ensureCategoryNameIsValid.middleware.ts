import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error";

const ensureCategoryNameIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const categoryName = req.body.name;
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategoryName = await categoryRepository.findOne({
    where: {
      name: categoryName,
    },
  });

  if (findCategoryName) {
    throw new AppError("Category already exists", 409);
  }
  return next();
};

export default ensureCategoryNameIsValidMiddleware;
