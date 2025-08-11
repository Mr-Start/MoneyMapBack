import { AppError } from "../../../errors/AppError";
import { HttpError } from "../../../errors/HttpError";
import { ICategoryResponseDTO } from "../domain/DTOS/categoryDTO";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";

export class FindCategoryByIdService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(id: string): Promise<ICategoryResponseDTO | null> {
    const category = await this.categoryRepository.findCategoryById(id);
    if (!category) {
      throw new AppError("Category not found", HttpError.NOT_FOUND);
    }

    const categoryResponse: ICategoryResponseDTO = {
      id: category.id,
      categoryDate: category.categoryDate,
      fixedPercent: category.fixedPercent,
      confortPercent: category.confortPercent,
      goalsPercent: category.goalsPercent,
      joyPercent: category.joyPercent,
      investmentPercent: category.investmentPercent,
      studyPercent: category.studyPercent,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };

    return categoryResponse;
  }
}
