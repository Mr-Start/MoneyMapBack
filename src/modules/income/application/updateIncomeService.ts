import { AppError } from "../../../errors/AppError";
import { HttpError } from "../../../errors/HttpError";
import { IIncomeResponseDTO, IUpdateIncomeDTO } from "../domain/DTOS/incomeDTO";
import { IIncomeRepository } from "../domain/repositories/IIncomeReposiory";

export class UpdateIncomeService {
  constructor(private incomeRepository: IIncomeRepository) {}

  async execute(
    id: string,
    data: IUpdateIncomeDTO
  ): Promise<IIncomeResponseDTO | null> {
    const income = await this.incomeRepository.findById(id);

    if (!income) {
      throw new AppError("Income not found", HttpError.NOT_FOUND);
    }

    const newIncome: IUpdateIncomeDTO = {
      ...income,
      ...data,
    };

    const updatedIncome = await this.incomeRepository.update(id, newIncome);

    if (!updatedIncome) {
      throw new AppError("Income not updated", HttpError.INTERNAL_SERVER_ERROR);
    }

    return updatedIncome;
  }
}
