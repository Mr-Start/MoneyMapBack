import { IHashProvider } from "../../../shared/container/providers/HashProvider/models/IHashProvider";
import { ICreateUserDTO, IUserResponseDTO } from "../domain/DTOS/userDTO";
import { User } from "../domain/entities/user.entity";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { AppError } from "../../../errors/AppError";

export class CreateUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider
  ) {}

  async execute(data: ICreateUserDTO): Promise<IUserResponseDTO> {
    const user = User.create(data);

    if (!user) throw new AppError("User not created");
    if (!user.verifyEmail()) throw new AppError("Email not valid");
    if (!user.verifyPassword()) throw new AppError("Password not valid");

    const userExists = await this.userRepository.findByEmail(user.getEmail);
    if (userExists) throw new AppError("Email already exists");

    const hashedPassword = await this.hashProvider.generateHash(
      user.getPassword
    );
    user.setPassword = hashedPassword;

    try {
      await this.userRepository.create(user.toDTO());

      const createdUser = await this.userRepository.findById(user.getId);

      if (!createdUser) throw new AppError("User not created");

      const userResponse: IUserResponseDTO = {
        id: createdUser.id,
        email: createdUser.email,
        createdAt: createdUser.createdAt,
        updatedAt: createdUser.updatedAt,
      };

      return userResponse;
    } catch (error) {
      throw new AppError("User not created in database");
    }
  }
}
