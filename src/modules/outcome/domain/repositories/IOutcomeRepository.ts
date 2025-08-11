import {
  ICreateOutcomeDTO,
  IOutcomeResponseDTO,
  IUpdateOutcomeDTO,
} from "../DTOS/outcomeDTO";

export interface IUserRepository {
  create(data: ICreateOutcomeDTO): Promise<IOutcomeResponseDTO>;
  list(): Promise<IOutcomeResponseDTO[]>;
  findById(id: string): Promise<IOutcomeResponseDTO | null>;
  findByEmail(email: string): Promise<IOutcomeResponseDTO | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: IUpdateOutcomeDTO): Promise<IOutcomeResponseDTO>;
}
