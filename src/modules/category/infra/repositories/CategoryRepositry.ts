import { PrismaClient } from "@prisma/client";
import { endOfMonth, startOfMonth } from "date-fns";
import {
  ICategoryDTO,
  ICategoryResponseDTO,
  IUpdateCategoryDTO,
} from "../../domain/DTOS/categoryDTO";
import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";

const prisma = new PrismaClient();

export class CategoryRepository implements ICategoryRepository {
  async create(category: ICategoryDTO): Promise<ICategoryResponseDTO> {
    const createdCategory = await prisma.category.create({
      data: category,
    });
    return createdCategory;
  }
  async findCategoryById(id: string): Promise<ICategoryResponseDTO | null> {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    return category;
  }

  async findCategoryByDate(
    userId: string,
    date: Date
  ): Promise<ICategoryResponseDTO | null> {
    const category = await prisma.category.findFirst({
      where: {
        userId,
        categoryDate: {
          gte: startOfMonth(date),
          lt: endOfMonth(date),
        },
      },
    });
    return category;
  }

  async update(
    id: string,
    data: IUpdateCategoryDTO
  ): Promise<ICategoryResponseDTO | null> {
    const category = await prisma.category.update({
      where: { id },
      data,
    });
    return category;
  }

  async delete(id: string): Promise<void> {
    await prisma.category.delete({
      where: { id },
    });
  }
}
