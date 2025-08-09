import { PrismaClient } from "@prisma/client";
import { ICreateUserDTO, IUserDTO } from "../../domain/DTOS/userDTO";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
  async create(user: IUserDTO): Promise<IUserDTO> {
    const res = await prisma.user.create({
      data: user,
    });

    return {
      ...res,
      createdAt: res.createdAt || undefined,
      updatedAt: res.updatedAt || undefined,
    };
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<IUserDTO | null> {
    const res = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return res
      ? {
          ...res,
          createdAt: res.createdAt || undefined,
          updatedAt: res.updatedAt || undefined,
        }
      : null;
  }

  async findByEmail(email: string): Promise<IUserDTO | null> {
    const res = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return res
      ? {
          ...res,
          createdAt: res.createdAt || undefined,
          updatedAt: res.updatedAt || undefined,
        }
      : null;
  }

  async list(): Promise<IUserDTO[]> {
    const res = await prisma.user.findMany();
    const toDto = res.map((user: IUserDTO) => {
      return {
        ...user,
        createdAt: user.createdAt || undefined,
        updatedAt: user.updatedAt || undefined,
      };
    });

    return toDto;
  }

  async update(id: string, data: ICreateUserDTO): Promise<IUserDTO> {
    const res = await prisma.user.update({
      where: {
        id,
      },
      data,
    });

    return {
      ...res,
      createdAt: res.createdAt || undefined,
      updatedAt: res.updatedAt || undefined,
    };
  }
}
