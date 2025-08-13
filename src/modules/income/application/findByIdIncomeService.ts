import { AppError } from "../../../errors/AppError";
import { HttpError } from "../../../errors/HttpError";
import { IIncomeResponseDTO } from "../domain/DTOS/incomeDTO";
import { IIncomeRepository } from "../domain/repositories/IIncomeReposiory";

export class FindByIdIncomeService {
  constructor(private incomeRepository: IIncomeRepository) {}

  async execute(id: string): Promise<IIncomeResponseDTO | null> {
    const income = await this.incomeRepository.findById(id);

    if (!income) {
      throw new AppError("User not found", HttpError.NOT_FOUND);
    }

    const incomeResponse: IIncomeResponseDTO = {
      id: income.id,
      userId: income.userId,
      amount: income.amount,
      name: income.name,
      incomeDate: income.incomeDate,
      createdAt: income.createdAt,
      updatedAt: income.updatedAt,
    };

    return incomeResponse;
  }
}
