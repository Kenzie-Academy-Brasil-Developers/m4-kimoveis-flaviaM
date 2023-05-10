import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
  TCreateUser,
  TRepositoryUser,
  TReturnUser,
} from "../../interfaces/users.interfaces";
import { returnSchemaData } from "../../schemas/users.schemas";

const createUserService = async (
  userData: TCreateUser
): Promise<TReturnUser> => {
  const userRepository: TRepositoryUser = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);

  await userRepository.save(user);
  const newUser = returnSchemaData.parse(user);

  return newUser;
};

export default createUserService;
