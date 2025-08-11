import { AppError } from "../../../errors/AppError";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";

export class DeleteCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findCategoryById(id);
    if (!category) {
      throw new AppError("Category not found");
    }
    await this.categoryRepository.delete(id);
  }
}
