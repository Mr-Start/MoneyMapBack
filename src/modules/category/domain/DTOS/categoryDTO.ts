export interface ICategoryDTO {
  id: string;
  fixedPercent: number;
  confortPercent: number;
  goalsPercent: number;
  joyPercent: number;
  investmentPercent: number;
  studyPercent: number;
  userId: string;
  categoryDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateCategoryDTO {
  userId: string;
  categoryDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUpdateCategoryDTO {
  fixedPercent?: number;
  confortPercent?: number;
  goalsPercent?: number;
  joyPercent?: number;
  investmentPercent?: number;
  studyPercent?: number;
  updatedAt?: Date;
}
export interface ICategoryResponseDTO {
  id: string;
  fixedPercent: number;
  confortPercent: number;
  goalsPercent: number;
  joyPercent: number;
  investmentPercent: number;
  studyPercent: number;
  categoryDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
