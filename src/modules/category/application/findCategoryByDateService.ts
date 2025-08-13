import { AppError } from "../../../errors/AppError";
import {
  ICategoryResponseDTO,
  ICreateCategoryDTO,
} from "../domain/DTOS/categoryDTO";
import { Category } from "../domain/entities/category.entity";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";

export class FindCategoryByDateService {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(
    userId: string,
    date: Date
  ): Promise<ICategoryResponseDTO | null> {
    
    let response = await this.categoryRepository.findCategoryByDate(
      userId,
      date
    );
    if (!response) {
      const category: ICreateCategoryDTO = {
        userId: userId,
        categoryDate: date,
      };
      const newCategory = new Category(category);
      response = await this.categoryRepository.create(newCategory);
      if (!response) {
        throw new AppError("Category not created or found");
      }
    }
    return response;
  }
}
