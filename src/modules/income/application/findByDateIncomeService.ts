import { AppError } from "../../../errors/AppError";
import { HttpError } from "../../../errors/HttpError";
import { IIncomeResponseDTO } from "../domain/DTOS/incomeDTO";
import { IIncomeRepository } from "../domain/repositories/IIncomeReposiory";

export class FindIncomeByDateService {
  constructor(private incomeRepository: IIncomeRepository) {}

  async execute(userId: string, date: Date): Promise<IIncomeResponseDTO[]> {
    const incomes = await this.incomeRepository.findByDate(userId, date);

    if (!incomes || incomes.length === 0) {
      throw new AppError("No incomes found for this month", HttpError.NOT_FOUND);
    }

    const incomeResponses: IIncomeResponseDTO[] = incomes.map((income) => ({
      id: income.id,
      userId: income.userId,
      amount: income.amount,
      name: income.name,
      incomeDate: income.incomeDate,
      createdAt: income.createdAt,
      updatedAt: income.updatedAt,
    }));

    return incomeResponses;
  }
}
