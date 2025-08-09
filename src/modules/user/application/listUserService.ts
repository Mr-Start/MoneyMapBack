import { IUserDTO, IUserResponseDTO } from "../domain/DTOS/userDTO";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { AppError } from "../../../errors/AppError";

export class ListUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<IUserResponseDTO[]> {
    try {
      const users = await this.userRepository.list();

      if (!users) {
        throw new AppError("Users not found");
      }

      const usersResponse: IUserResponseDTO[] = users.map((user) => {
        return {
          id: user.id,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };
      });

      return usersResponse;
    } catch (error) {
      throw new AppError("Error getting users from database");
    }
  }
}
