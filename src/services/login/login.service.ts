import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { TLoginData } from "../../interfaces/login.interfaces";
import { AppError } from "../../error";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (payload: TLoginData): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({
    email: payload.email,
  });
  if (!user || user.deletedAt) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await bcrypt.compare(payload.password, user.password);
  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: user.admin,
    },
    process.env.SECRET_KEY!
  );
  return token;
};

export default createLoginService;
