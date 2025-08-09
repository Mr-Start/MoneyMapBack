import { AppError } from "../../../errors/AppError";
import { IDeleteUserOutputDTO } from "../domain/DTOS/userDTO";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class DeleteUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<IDeleteUserOutputDTO> {
    try {
      const user = await this.userRepository.findById(id);
      if (user) {
        await this.userRepository.delete(id);
      }
      return { message: "User deleted successfully" };
    } catch (error) {
      throw new AppError("Error deleting user from database");
    }
  }
}
