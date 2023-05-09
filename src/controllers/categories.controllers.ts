import { Request, Response } from "express";
import { TCreateCategory } from "../interfaces/categories.interfaces";
import createCategoryService from "../services/categories/createCategory.service";
import getAllCategoriesService from "../services/categories/getAllCategories.service";
import getRealEstateByCategoryService from "../services/categories/getRealEstateByCategory.service";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: TCreateCategory = req.body;
  const newCategory = await createCategoryService(categoryData);

  return res.status(201).json(newCategory);
};

const getAllCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories = await getAllCategoriesService();

  return res.json(categories);
};

const getRealEstateByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId = parseInt(req.params.id);
  const realEstate = await getRealEstateByCategoryService(categoryId);

  return res.json(realEstate);
};

export {
  createCategoryController,
  getAllCategoriesController,
  getRealEstateByCategoryController,
};
