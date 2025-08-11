export interface IOutcomeDTO {
  id: string;
  userId: string;
  amount: number;
  name: string;
  category: string;
  date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IOutcomeResponseDTO {
  id: string;
  userId: string;
  amount: number;
  name: string;
  category: string;
  date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateOutcomeDTO {
  userId: string;
  amount: number;
  name: string;
  category: string;
  date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDeleteOutcomeOutputDTO {
  message: string;
}

export interface IUpdateOutcomeDTO {
  amount?: number;
  name?: string;
  category?: string;
  date?: Date;
}
