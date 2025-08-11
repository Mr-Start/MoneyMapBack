import { AppError } from "../../../errors/AppError";
import {
  ICategoryResponseDTO,
  IUpdateCategoryDTO,
} from "../domain/DTOS/categoryDTO";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";

export class UpdateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(
    data: IUpdateCategoryDTO,
    id: string
  ): Promise<ICategoryResponseDTO> {
    try {
      const category = await this.categoryRepository.findCategoryById(id);

      const newCategory: IUpdateCategoryDTO = {
        ...category,
        ...data,
      };
      const updatedCategory = await this.categoryRepository.update(
        id,
        newCategory
      );
      if (!updatedCategory) {
        throw new AppError("Category not found", 404);
      }

      const categoryResponse: ICategoryResponseDTO = {
        id: updatedCategory.id,
        categoryDate: updatedCategory.categoryDate,
        fixedPercent: updatedCategory.fixedPercent,
        confortPercent: updatedCategory.confortPercent,
        goalsPercent: updatedCategory.goalsPercent,
        joyPercent: updatedCategory.joyPercent,
        investmentPercent: updatedCategory.investmentPercent,
        studyPercent: updatedCategory.studyPercent,
        createdAt: updatedCategory.createdAt,
        updatedAt: updatedCategory.updatedAt,
      };

      return categoryResponse;
    } catch (error: unknown) {
      throw new AppError(
        `Error updating category from database: ${error}`,
        500
      );
    }
  }
}
