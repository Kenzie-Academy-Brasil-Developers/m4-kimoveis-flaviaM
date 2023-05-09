import { Repository } from "typeorm";
import {
  TCreateRealEstate,
  TReturnRealEstate,
} from "../../interfaces/realEstate.interfaces";
import { AppDataSource } from "../../data-source";
import {
  createSchemaRealEstateData,
  returnSchemaRealEstateData,
} from "../../schemas/realEstate.schemas";
import { AppError } from "../../error";
import { Address, Category, RealEstate } from "../../entities";

const createRealEstateService = async (
  realEstateData: TCreateRealEstate
): Promise<TReturnRealEstate> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const address: Address = addressRepository.create(realEstateData.address);
  const addressFind = await addressRepository.findOneBy({
    street: String(address.street),
    number: String(address.number),
  });

  if (addressFind) {
    throw new AppError("Address already exists", 409);
  }

  await addressRepository.save(address);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const categoryFind = await categoryRepository.findOneBy({
    id: Number(realEstateData.categoryId),
  });

  if (!categoryFind) {
    throw new AppError("Category not found", 404);
  }
  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const estate = estateRepository.create({
    ...realEstateData,
    address,
    category: categoryFind,
  });
  await estateRepository.save(estate);
  const newEstate = returnSchemaRealEstateData.parse(estate);

  return newEstate;
};

export default createRealEstateService;
