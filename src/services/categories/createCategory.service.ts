import { Repository } from "typeorm";
import { Category } from "../../entities";
import {
  TCreateCategory,
  TReturnCategory,
} from "../../interfaces/categories.interfaces";
import { AppDataSource } from "../../data-source";
import { returnSchemaCategoryData } from "../../schemas/categories.schemas";

const createCategoryService = async (
  categoryData: TCreateCategory
): Promise<TReturnCategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategory = returnSchemaCategoryData.parse(category);

  return newCategory;
};

export default createCategoryService;
