import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  TCreate,
  TRepository,
  TReturn,
} from "../../interfaces/users.interfaces";
import { returnSchemaData } from "../../schemas/users.schemas";

const createUserService = async (userData: TCreate): Promise<TReturn> => {
  const userRepository: TRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);

  await userRepository.save(user);
  const newUser = returnSchemaData.parse(user);

  return newUser;
};

export default createUserService;
