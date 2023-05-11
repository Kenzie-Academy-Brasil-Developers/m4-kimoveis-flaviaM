import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const getRealEstateByCategoryService = async (
  categoryId: number
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryRepoResult: Category | null = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });
  if (!categoryRepoResult) {
    throw new AppError("Category not found", 404);
  }

  return categoryRepoResult!;
};

export default getRealEstateByCategoryService;
