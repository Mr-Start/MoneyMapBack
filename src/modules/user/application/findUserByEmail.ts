import { AppError } from "../../../errors/AppError";
import { IUserDTO } from "../domain/DTOS/userDTO";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class FindByEmailUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(email: string): Promise<IUserDTO | null> {
    try {
      const user = await this.userRepository.findByEmail(email);

      if (!user) {
        throw new AppError("User not found");
      }

      return user;
    } catch (error) {
      throw new AppError("Error getting user from database");
    }
  }
}
