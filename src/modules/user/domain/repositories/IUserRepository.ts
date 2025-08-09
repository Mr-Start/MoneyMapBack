import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IUserDTO,
  IUserResponseDTO,
} from "../DTOS/userDTO";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IUserResponseDTO>;
  list(): Promise<IUserResponseDTO[]>;
  findById(id: string): Promise<IUserResponseDTO | null>;
  findByEmail(email: string): Promise<IUserDTO | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: IUpdateUserDTO): Promise<IUserResponseDTO>;
}
