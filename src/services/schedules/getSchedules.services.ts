import { Repository } from "typeorm";
import { TReturnRealEstate } from "../../interfaces/realEstate.interfaces";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../error";

const getSchedulesService = async (
  realEstate: number
): Promise<TReturnRealEstate> => {
  const estateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const realEstateFind: RealEstate | null = await estateRepository.findOne({
    where: {
      id: realEstate,
    },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true,
      },
    },
  });

  if (!realEstateFind) {
    throw new AppError("RealEstate not found", 404);
  }

  return realEstateFind;
};

export default getSchedulesService;
