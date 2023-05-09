import { Repository } from "typeorm";

import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TReturnUser, TUpdateUser } from "../../interfaces/users.interfaces";
import { returnSchemaData } from "../../schemas/users.schemas";

const updateUserService = async (
  userData: TUpdateUser,
  idParam: number
): Promise<TReturnUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const oldUser = await userRepository.findOne({
    where: {
      id: idParam,
    },
  });
  const user = userRepository.create({
    ...oldUser,
    ...userData,
  });
  await userRepository.save(user);
  const updatedUser = returnSchemaData.parse(user);
  return updatedUser;
};

export default updateUserService;
