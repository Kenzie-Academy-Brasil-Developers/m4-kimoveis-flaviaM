import { Repository } from "typeorm";
import { Category } from "../../entities";
import {
  tCategoryRequest,
  tCategoryResponse,
} from "../../interfaces/categories.interfaces";
import { AppDataSource } from "../../data-source";
import { createCategoryResponseSchema } from "../../schemas/categories.schemas";

const createCategoryService = async (
  categoryData: tCategoryRequest
): Promise<tCategoryResponse> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategory = createCategoryResponseSchema.parse(category);

  return newCategory;
};

export default createCategoryService;
