import { AppError } from "../../../errors/AppError";
import { IIncomeRepository } from "../domain/repositories/IIncomeReposiory";

export class DeleteIncomeService {
  constructor(private incomeRepository: IIncomeRepository) {}

  async execute(id: string): Promise<void> {
    try {
      const income = await this.incomeRepository.findById(id);
      if (income) {
        await this.incomeRepository.delete(id);
      }
    } catch (error) {
      throw new AppError(`Error deleting income ${error}`);
    }
  }
}
