import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { IHashProvider } from "../../../../shared/container/providers/HashProvider/models/IHashProvider";
import { CreateUserService } from "../../application/createUserService";
import { ICreateUserDTO, IUpdateUserDTO } from "../../domain/DTOS/userDTO";
import { UpdateUserService } from "../../application/updateUserService";
import { ListUserService } from "../../application/listUserService";
import { DeleteUserService } from "../../application/deleteUserService";
import { FindByIdUserService } from "../../application/findByIdUserService";
import { FindByEmailUserService } from "../../application/findUserByEmail";
import { createUserSchema, updateUserSchema } from "../schemas/userSchemas";

export class UserController {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider
  ) {}

  async handleCreate(req: Request, res: Response): Promise<Response> {
    const user: ICreateUserDTO = req.body;

    try {
      createUserSchema.parse(user);
    } catch (error: any) {
      if (error.errors && Array.isArray(error.errors)) {
        throw new AppError(error.errors[0].message, 400);
      }
      throw new AppError("Validation error", 400);
    }

    const createUserService = new CreateUserService(
      this.userRepository,
      this.hashProvider
    );
    const response = await createUserService.execute(user);

    return res.status(201).json(response);
  }

  async handleUpdate(req: Request, res: Response): Promise<Response> {
    const user: IUpdateUserDTO = req.body;
    const { id } = req.params;

    try {
      updateUserSchema.parse(user);
    } catch (error: any) {
      if (error.errors && Array.isArray(error.errors)) {
        throw new AppError(error.errors[0].message, 400);
      }
      throw new AppError("Validation error", 400);
    }

    const updateUserService = new UpdateUserService(this.userRepository);
    const result = await updateUserService.execute(user, id);

    return res.status(200).json(result);
  }

  async handleList(req: Request, res: Response): Promise<Response> {
    const listUserService = new ListUserService(this.userRepository);
    const result = await listUserService.execute();

    return res.status(200).json(result);
  }

  async handleDelete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUserService = new DeleteUserService(this.userRepository);
    const result = await deleteUserService.execute(id);

    return res.status(200).json(result);
  }

  async handleFindById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    
    const findByIdUserService = new FindByIdUserService(this.userRepository);
    const result = await findByIdUserService.execute(id);

    return res.status(200).json(result);
  }

  async handleFindByEmail(req: Request, res: Response): Promise<Response> {
    const { email } = req.params;

    const findBtEmailUserService = new FindByEmailUserService(
      this.userRepository
    );
    const result = await findBtEmailUserService.execute(email);

    return res.status(200).json(result);
  }
}
