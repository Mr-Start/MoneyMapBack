import { PrismaClient } from "@prisma/client";
import { IIncomeRepository } from "../../domain/repositories/IIncomeReposiory";
import {
  IIncomeDTO,
  IIncomeResponseDTO,
  IUpdateIncomeDTO,
} from "../../domain/DTOS/incomeDTO";
import { endOfMonth, startOfMonth } from "date-fns";

const prisma = new PrismaClient();

export class IncomeRepository implements IIncomeRepository {
  async create(data: IIncomeDTO): Promise<IIncomeResponseDTO> {
    const income = await prisma.income.create({
      data,
    });
    return income;
  }

  async findById(id: string): Promise<IIncomeResponseDTO | null> {
    const income = await prisma.income.findUnique({
      where: { id },
    });
    return income;
  }

  async findByDate(userId: string, date: Date): Promise<IIncomeResponseDTO[]> {
    const income = await prisma.income.findMany({
      where: {
        userId,
        incomeDate: {
          gte: startOfMonth(date),
          lt: endOfMonth(date),
        },
      },
    });
    return income;
  }

  async list(): Promise<IIncomeResponseDTO[]> {
    const incomes = await prisma.income.findMany();
    return incomes;
  }

  async update(
    id: string,
    data: IUpdateIncomeDTO
  ): Promise<IIncomeResponseDTO | null> {
    const income = await prisma.income.update({
      where: { id },
      data,
    });
    return income;
  }

  async delete(id: string): Promise<void> {
    await prisma.income.delete({
      where: { id },
    });
  }
}
