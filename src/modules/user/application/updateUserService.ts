import { AppError } from "../../../errors/AppError";
import {
  IUpdateUserDTO,
  IUserDTO,
  IUserResponseDTO,
} from "../domain/DTOS/userDTO";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class UpdateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUpdateUserDTO, id: string): Promise<IUserResponseDTO> {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) {
        throw new AppError("User not found");
      }

      const newUser: IUpdateUserDTO = {
        ...user,
        ...data,
      };

      const result = await this.userRepository.update(id, newUser);

      const userResponse: IUserResponseDTO = {
        id: result.id,
        email: result.email,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
      };

      return userResponse;
    } catch (error: unknown) {
      throw new AppError(`Error updating user from database: ${error}`, 500);
    }
  }
}
