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
    console.log("Creating category with data:", data);
    try {
      await this.categoryRepository.create(category);
    } catch (error) {
      throw new AppError(`Error creating category ${error}`);
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
