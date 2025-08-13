import { AppError } from "../../../errors/AppError";
import {
  ICategoryResponseDTO,
  ICreateCategoryDTO,
} from "../domain/DTOS/categoryDTO";
import { Category } from "../domain/entities/category.entity";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";

export class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(data: ICreateCategoryDTO): Promise<ICategoryResponseDTO> {
    const category = Category.create(data);
    if (!category) throw new AppError("Category not created");
    try {
      const response = await this.categoryRepository.create(category.toDTO());
      const categoryResponse: ICategoryResponseDTO = {
        id: response.id,
        categoryDate: response.categoryDate,
        fixedPercent: response.fixedPercent,
        confortPercent: response.confortPercent,
        goalsPercent: response.goalsPercent,
        joyPercent: response.joyPercent,
        investmentPercent: response.investmentPercent,
        studyPercent: response.studyPercent,
        createdAt: response.createdAt,
        updatedAt: response.updatedAt,
      };
      return categoryResponse;
    } catch (error) {
      throw new AppError(`Error creating category ${error}`);
    }
  }
}
