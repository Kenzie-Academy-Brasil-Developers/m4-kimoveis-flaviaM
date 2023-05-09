import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TAllUser } from "../../interfaces/users.interfaces";
import { allSchemaData } from "../../schemas/users.schemas";

const getAllUsersService = async (): Promise<TAllUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers = await userRepository.find();

  const users = allSchemaData.parse(findUsers);

  return users;
};

export default getAllUsersService;
