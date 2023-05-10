import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { TCreateSchedule } from "../../interfaces/schedules.interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const createSchedulesService = async (
  scheduleDueData: TCreateSchedule,
  userId: number
): Promise<object> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepoResult: User | null = await userRepository.findOneBy({
    id: Number(userId),
  });
  if (!userRepoResult) {
    throw new AppError("User not found", 404);
  }

  let realEstateResult: RealEstate | null;

  if (scheduleDueData.realEstateId) {
    realEstateResult = await realEstateRepository.findOneBy({
      id: Number(scheduleDueData.realEstateId),
    });

    if (!realEstateResult) {
      throw new AppError("RealEstate not found", 404);
    }
  }

  const schedulesRepoCreate: Schedule = scheduleRepository.create({
    ...scheduleDueData,
    realEstate: realEstateResult!,
    user: userRepoResult!,
  });

  await scheduleRepository.save(schedulesRepoCreate);

  return { message: "Schedule created" };
};

export default createSchedulesService;
