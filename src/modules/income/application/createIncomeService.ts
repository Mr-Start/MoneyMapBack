import { AppError } from "../../../errors/AppError";
import { ICreateIncomeDTO, IIncomeResponseDTO } from "../domain/DTOS/incomeDTO";
import { Income } from "../domain/entities/income.entity";
import { IIncomeRepository } from "../domain/repositories/IIncomeReposiory";

export class CreateIncomeService {
  constructor(private incomeRepository: IIncomeRepository) {}

  async execute(data: ICreateIncomeDTO): Promise<IIncomeResponseDTO> {
    const income = Income.create(data);
    if (!income) throw new AppError("Income not created");
    try {
      const response = await this.incomeRepository.create(income.toDTO());
      const incomeResponse: IIncomeResponseDTO = {
        id: response.id,
        userId: response.userId,
        amount: response.amount,
        name: response.name,
        incomeDate: response.incomeDate,
        createdAt: response.createdAt,
        updatedAt: response.updatedAt,
      };
      return incomeResponse;
    } catch (error) {
      throw new AppError(`Error creating income ${error}`);
    }
  }
}
