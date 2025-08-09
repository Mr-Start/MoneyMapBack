import { AppError } from "../../../errors/AppError";
import { HttpError } from "../../../errors/HttpError";
import { IUserResponseDTO } from "../domain/DTOS/userDTO";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class FindByIdUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<IUserResponseDTO | null> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User not found", HttpError.NOT_FOUND);
    }

    const userResponse: IUserResponseDTO = {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return userResponse;
  }
}
