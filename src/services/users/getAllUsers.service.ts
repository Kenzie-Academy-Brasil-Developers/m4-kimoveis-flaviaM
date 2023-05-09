import { Repository } from "typeorm";

import { User } from "../../entities";

import { AppDataSource } from "../../data-source";
import { TAll } from "../../interfaces/users.interfaces";
import { allSchemaData } from "../../schemas/users.schemas";

const getAllUsersService = async (): Promise<TAll> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const findUsers = await userRepository.find();
  const users = allSchemaData.parse(findUsers);
  return users;
};

export default getAllUsersService;
