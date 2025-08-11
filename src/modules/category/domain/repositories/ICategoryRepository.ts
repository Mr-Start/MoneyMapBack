import {
  ICategoryResponseDTO,
  ICreateCategoryDTO,
  IUpdateCategoryDTO,
} from "../DTOS/categoryDTO";

export interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<ICategoryResponseDTO>;
  findCategoryById(id: string): Promise<ICategoryResponseDTO | null>;
  findCategoryByCreateAt(
    userId: string,
    date: Date
  ): Promise<ICategoryResponseDTO | null>;
  update(
    id: string,
    data: IUpdateCategoryDTO
  ): Promise<ICategoryResponseDTO | null>;
  delete(id: string): Promise<void>;
}
