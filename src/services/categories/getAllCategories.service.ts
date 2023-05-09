import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { allSchemaCategoryData } from "../../schemas/categories.schemas";

const getAllCategoriesService = async (): Promise<object> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategories = await categoryRepository.find();

  const categories = allSchemaCategoryData.parse(findCategories);

  return categories;
};

export default getAllCategoriesService;
