import { Request, Response } from "express";
import { TCreateRealEstate } from "../interfaces/realEstate.interfaces";
import createRealEstateService from "../services/realEstate/createrealEstate.service";
import getRealEstateService from "../services/realEstate/getRealEState.service";

const createPropertyController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateData: TCreateRealEstate = req.body;

  const newProperty = await createRealEstateService(realEstateData);

  return res.status(201).json(newProperty);
};

const getPropertiesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allProperties = await getRealEstateService();

  return res.json(allProperties);
};

export { createPropertyController, getPropertiesController };
