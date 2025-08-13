import {
  ICreateIncomeDTO,
  IUpdateIncomeDTO,
  IIncomeDTO,
  IIncomeResponseDTO,
} from "../DTOS/incomeDTO";

export interface IIncomeRepository {
  create(data: ICreateIncomeDTO): Promise<IIncomeResponseDTO>;
  list(): Promise<IIncomeResponseDTO[]>;
  findById(id: string): Promise<IIncomeResponseDTO | null>;
  findByDate(userId: string, date: Date): Promise<IIncomeResponseDTO[]>;
  delete(id: string): Promise<void>;
  update(
    id: string,
    data: IUpdateIncomeDTO
  ): Promise<IIncomeResponseDTO | null>;
}
